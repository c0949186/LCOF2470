// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  // Check screen width and set initial state
  function checkScreenWidth() {
      if (window.innerWidth <= 1024) {
          navToggle.style.display = 'block';
      } else {
          navToggle.style.display = 'none';
          navMenu.classList.remove('active');
      }
  }

  navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Toggle button text/icon
      navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
          navMenu.classList.remove('active');
          navToggle.textContent = '☰';
      }
  });

  // Initial check and add resize listener
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});