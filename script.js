/* ─────────────────────────────────────────
   Vinshell Chemical Waterblasting — Scripts
   ───────────────────────────────────────── */

/* ══════════════════════════════
   QUOTE FORM — mailto submission
   ══════════════════════════════
   When the form is submitted, it opens the
   customer's email app with all their details
   pre-filled, addressed to your inbox.
   ══════════════════════════════ */

const BUSINESS_EMAIL = 'shelly_chand77@hotmail.com';

document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const address = document.getElementById('address').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(
    `Quote Request — ${service} — ${fname} ${lname}`
  );

  const body = encodeURIComponent(
    `Hello Vinshell,\n\n` +
    `I would like to request a quote for the following:\n\n` +
    `Name:     ${fname} ${lname}\n` +
    `Email:    ${email}\n` +
    `Phone:    ${phone || 'Not provided'}\n` +
    `Service:  ${service}\n` +
    `Address:  ${address || 'Not provided'}\n\n` +
    `Additional Details:\n${message || 'None provided'}\n\n` +
    `Please get in touch at your earliest convenience.\n\n` +
    `Kind regards,\n${fname} ${lname}`
  );

  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});


/* ══════════════════════════════
   NAV — smooth scroll for Contact button
   ══════════════════════════════ */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ══════════════════════════════
   NAV — highlight active section on scroll
   ══════════════════════════════ */

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--yellow)';
    }
  });
});
