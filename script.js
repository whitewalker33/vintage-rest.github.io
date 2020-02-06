// navbar color change on scroll efect
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
  $('nav > ul.nav-links > li').toggleClass('scrolledlinks', $(this).scrollTop() > 600);
  $('nav > div.burger').toggleClass('scrolledburger', $(this).scrollTop() > 600);
});

// smooth scrolling 
const scroll = new SmoothScroll('nav a[href*="#"]', {
  speed: 700
});

const scroll2 = new SmoothScroll('.up a[href*="#"]', {
  speed: 400
});


// Photo gallery application
$(".actual-gallery").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

// responsive navbar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');


    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle')

  });
}
navSlide();