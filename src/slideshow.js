// slideshow

export const slideshow = () => {
  let slideIndex = 1;
  const slideshowContainer = document.createElement('div');
  slideshowContainer.setAttribute('class', 'slideshow-container');

  const slideOne = document.createElement('div');
  slideOne.setAttribute('class', 'slide fade');
  slideOne.innerHTML = '<img src=./assets/book1.png alt = "BookOne">';

  const slideTwo = document.createElement('div');
  slideTwo.setAttribute('class', 'slide fade');
  slideTwo.innerHTML = '<img src=./assets/book2.png alt = "BookTwo">';

  const slideThree = document.createElement('div');
  slideThree.setAttribute('class', 'slide fade');
  slideThree.innerHTML = '<img src=./assets/book3.png alt = "BookThree">';

  const slideFour = document.createElement('div');
  slideFour.setAttribute('class', 'slide fade');
  slideFour.innerHTML = '<img src=./assets/book4.png alt = "BookFour">';

  const btnPrev = document.createElement('a');
  btnPrev.setAttribute('class', 'btnPrev');
  btnPrev.innerHTML = '&#10094;';

  const btnNext = document.createElement('a');
  btnNext.setAttribute('class', 'btnNext');
  btnNext.innerHTML = '&#10095;';

  function showSlides(n) {
    let i;
    // const slides = document.getElementsByClassName('slide');
    const slides = [slideOne, slideTwo, slideThree, slideFour];
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  btnPrev.addEventListener('click', () => {
    plusSlides(-1);
  });

  btnNext.addEventListener('click', () => {
    plusSlides(1);
  });

  slideshowContainer.append(slideOne, slideTwo, slideThree, slideFour, btnPrev, btnNext);
  showSlides(slideIndex);
  return slideshowContainer;
};
