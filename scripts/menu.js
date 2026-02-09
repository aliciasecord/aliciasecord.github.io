const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-main');

toggle.addEventListener('click', function() {
  nav.classList.toggle('mobile-hide');
  toggle.classList.toggle('active');
});