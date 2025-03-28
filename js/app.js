document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const topbarHeight = document.querySelector('.topbar').offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > topbarHeight) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('#top-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const menuBar = document.querySelector('.menu-bar');
  const mobileMenu = document.querySelector('#mobile-menu');
  const closeMenu = document.querySelector('#mobile-menu-close');

  menuBar.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});