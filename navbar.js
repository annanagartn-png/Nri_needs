// Load navbar into the page
document.addEventListener('DOMContentLoaded', function() {
  fetch('./navbar.html')
    .then(response => response.text())
    .then(html => {
      const navbarContainer = document.getElementById('navbar');
      if (navbarContainer) {
        navbarContainer.innerHTML = html;
        initializeNavbar();
        // Add padding to prevent content overlap
        document.body.style.paddingTop = '75px';
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});

// Initialize navbar functionality
function initializeNavbar() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  }
}
