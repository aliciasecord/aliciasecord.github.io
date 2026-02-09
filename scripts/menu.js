const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-main');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('mobile-hide');
  navToggle.classList.toggle('active');
});