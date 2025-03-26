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

  // Показываем/скрываем кнопку при прокрутке
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Показываем после 300px прокрутки
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  // Плавная прокрутка наверх при клике
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка
    });
  });
});