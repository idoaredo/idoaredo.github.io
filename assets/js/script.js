const toggle = document.getElementById('dark-mode-toggle');

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  if (toggle) toggle.textContent = isDark ? '[light]' : '[dark]';
}

applyTheme(localStorage.getItem('theme') === 'dark');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
  });
}

document.querySelectorAll('nav a').forEach(link => {
  if (link.href === location.href) link.setAttribute('aria-current', 'page');
});
