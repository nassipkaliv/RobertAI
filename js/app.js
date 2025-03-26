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