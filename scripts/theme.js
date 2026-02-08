  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  // Initial load
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme || getSystemTheme();
  setTheme(initialTheme);

  // Toggle behavior
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });