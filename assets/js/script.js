// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');
const moon   = document.getElementById('icon-moon');
const sun    = document.getElementById('icon-sun');

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  moon.style.display = isDark ? 'none'  : '';
  sun.style.display  = isDark ? ''      : 'none';
}

applyTheme(localStorage.getItem('theme') === 'dark');

toggle.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyTheme(isDark);
});

// Mark active nav link based on current page
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === location.href) {
    link.setAttribute('aria-current', 'page');
  }
});
