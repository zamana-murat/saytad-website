// Cloudflare Pages Function — POST /api/contact
// Receives JSON from the contact form, validates, and sends email via Resend.
// Required env vars (set in CF Pages dashboard → Settings → Environment Variables):
//   RESEND_API_KEY  — Resend API key (Secret)
//   CONTACT_TO      — destination email (e.g. info@saytad.com)
//   CONTACT_FROM    — verified Resend sender, e.g. "Saytad <noreply@saytad.com>"

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface FormPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string; // honeypot
  lang?: 'tr' | 'en';
}

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const escape = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let data: FormPayload;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'invalid_json' });
  }

  // Honeypot — if filled, silently succeed
  if (data.website && data.website.trim().length > 0) {
    return json(200, { ok: true });
  }

  const { firstName, lastName, email, phone, interest, message, lang = 'tr' } = data;

  if (!firstName || !lastName || !email || !message) {
    return json(400, { ok: false, error: 'missing_fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { ok: false, error: 'invalid_email' });
  }
  if (message.length > 5000 || firstName.length > 200 || lastName.length > 200) {
    return json(400, { ok: false, error: 'too_long' });
  }

  const apiKey = env.RESEND_API_KEY;
  const to = env.CONTACT_TO ?? 'info@saytad.com';
  const from = env.CONTACT_FROM ?? 'Saytad <noreply@saytad.com>';

  // Graceful dev fallback — log only, return success
  if (!apiKey) {
    console.log('[contact] no RESEND_API_KEY, skipping send', {
      firstName,
      lastName,
      email,
      phone,
      interest,
      message,
    });
    return json(200, { ok: true, dev: true });
  }

  const subject = lang === 'tr'
    ? `Saytad — Yeni iletişim formu (${interest || 'Genel'})`
    : `Saytad — New contact form (${interest || 'General'})`;

  const text = [
    `Ad: ${firstName} ${lastName}`,
    `E-posta: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    interest ? `Konu: ${interest}` : null,
    `Dil: ${lang}`,
    '',
    'Mesaj:',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `<div style="font-family:system-ui,sans-serif;line-height:1.6">
  <h2 style="margin:0 0 1rem;color:#0f0c07">Yeni iletişim mesajı</h2>
  <p><strong>Ad:</strong> ${escape(firstName)} ${escape(lastName)}</p>
  <p><strong>E-posta:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
  ${phone ? `<p><strong>Telefon:</strong> ${escape(phone)}</p>` : ''}
  ${interest ? `<p><strong>Konu:</strong> ${escape(interest)}</p>` : ''}
  <p><strong>Dil:</strong> ${escape(lang)}</p>
  <hr style="border:none;border-top:1px solid #eee;margin:1rem 0">
  <p style="white-space:pre-wrap">${escape(message)}</p>
</div>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[contact] resend error', res.status, detail);
      return json(502, { ok: false, error: 'send_failed', status: res.status });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error('[contact] network error', err);
    return json(502, { ok: false, error: 'network' });
  }
};

// Non-POST requests get a 405. CF Pages automatically falls back when only
// onRequestPost is exported — no explicit handler needed.
