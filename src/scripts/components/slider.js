export const slider = () => {
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const slides = document.querySelectorAll('.slider__slide');
  const prevBtn = document.querySelector('.slider__button--prev');
  const nextBtn = document.querySelector('.slider__button--next');

  let currentSlide = 0;
  let interval;

  function updatePosition() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function prevSlide() {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updatePosition();
  }

  function nextSlide() {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updatePosition();
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  startAutoplay();
};
