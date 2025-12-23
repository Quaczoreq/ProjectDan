document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.typing');
  if (!el) return;
  const text = el.getAttribute('data-text') || '';
  el.innerHTML = '';
  let i = 0;
  const speed = 80; // ms per character

  function typeNext() {
    if (i >= text.length) return;
    const ch = text[i++];
    if (ch === '\n') {
      el.innerHTML += '<br/>';
    } else {
      // escape HTML-sensitive characters just in case
      const span = document.createElement('span');
      span.textContent = ch;
      el.appendChild(span);
    }
    setTimeout(typeNext, speed);
  }

  typeNext();
});
