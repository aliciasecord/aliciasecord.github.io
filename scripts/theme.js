const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const storedTheme = localStorage.getItem('theme') || 'system';

root.setAttribute('data-theme', storedTheme);

function updateIcon(theme) {
    if (theme === 'dark') toggle.textContent = '🌙';
    else if (theme === 'light') toggle.textContent = '☀️';
    else toggle.textContent = '🌓';
  }

updateIcon(storedTheme);

toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next =
      current === 'system' ? 'dark' :
      current === 'dark' ? 'light' :
      'system';

    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
});