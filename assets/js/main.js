const scrollRevealOption = {
    distance: "20px",
    duration: 1800,
  };
  

  ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    origin: 'top'
  });
  ScrollReveal().reveal(".section__body", {
    ...scrollRevealOption,
    origin: 'left',

  });
  
  const swiper_reviews = new Swiper('.reviews__slider', {
    // Default parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    centeredSlides: true,
    navigation: {
        nextEl: '.reviews-navigation-button--next',
        prevEl: '.reviews-navigation-button--prev',
      },
    breakpoints: {
      830: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
});
swiper_reviews.slideToLoop(2);

const swiper_personal = new Swiper('.personal-vlog__slider', {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 70,
    modifier: 2,
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },

  breakpoints: {
    1560: {
      slidesPerView: 4
    }
  }
});
swiper_personal.slideToLoop(2);

const swiper_awards = new Swiper('.awards__slider', {
  // Default parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  navigation: {
      nextEl: '.awards-navigation-button--next',
      prevEl: '.awards-navigation-button--prev',
    },
  breakpoints: {
    830: {
      slidesPerView: 2.25,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  }
});
swiper_awards.slideToLoop(3);

const swiper_team = new Swiper('.team-benefits__slider', {
  // Default parameters
  loop: true,
  speed: 400,
  navigation: {
      nextEl: '.team-benefits-navigation-button--next',
      prevEl: '.team-benefits-navigation-button--prev',
    }
});
swiper_team.slideNext();
const swiper_skills = new Swiper('.skills', {
  // Default parameters
  loop: true,
  slidesPerView: 'auto',
  speed: 600,
  navigation: {
      nextEl: '.skills-navigation-button--next',
      prevEl: '.skills-navigation-button--prev',
    },
});
swiper_skills.slideToLoop(1);

const swiper_project = new Swiper('.project', {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 220,
    modifier: 1,
    scale: 1,
  },
  
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  navigation: {
    nextEl: '.project-navigation-button--next',
    prevEl: '.project-navigation-button--prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 1.25
    },
    1500: {
      slidesPerView: 2.25
    },
  }
});


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.success-steps-form__step');
  let currentStep = 0;
  showStep(currentStep);

  document.querySelectorAll('.success-steps-form__button').forEach(button => {
      button.addEventListener('click', function() {
          if (this.classList.contains('success-steps-form__button--next')) {
              changeStep(1);
          } else if (this.classList.contains('success-steps-form__button--prev')) {
              changeStep(-1);
          }
      });
  });

  function showStep(index) {
      steps.forEach(step => step.classList.remove('success-steps-form__step-active'));
      steps[index].classList.add('success-steps-form__step-active');
  }

  function changeStep(step) {
      currentStep += step;
      showStep(currentStep);
  }
});

const inputs = document.querySelectorAll('input[name="phone"]');
inputs.forEach(input => {
  input.addEventListener('input', function (e) {
    var value = e.target.value.replace(/[^\d]/g, ''); // Удаляем все нецифровые символы
    var formattedNumber = '';

    // Обработка первого символа
    if (value.length > 0) {
      if (value.charAt(0) === '8') {
        value = '7' + value.substring(1); // Заменяем "8" на "7"
      } else if (value.charAt(0) !== '7') {
        value = '7' + value; // Добавляем "7" в начало, если первый символ не "7"
      }
    }

    var formattedNumber = '+' + value.charAt(0); // Добавляем "+"
    value = value.substring(1); // Убираем "7" из строки для следующего форматирования

    // Добавляем первые три цифры
    if (value.length > 0) {
      formattedNumber += ' ' + value.substring(0, 3); // Добавляем код, например "950"
      value = value.substring(3);
    }

    // Добавляем следующие три цифры
    if (value.length > 0) {
      formattedNumber += ' ' + value.substring(0, 3); // Добавляем следующую группу цифр
      value = value.substring(3);
    }

    // Добавляем последние две группы по две цифры
    if (value.length > 0) {
      formattedNumber += '-' + value.substring(0, 2); // Добавляем первые две цифры
      value = value.substring(2);
    }

    if (value.length > 0) {
      formattedNumber += '-' + value.substring(0, 2); // Добавляем последние две цифры
    }

    e.target.value = formattedNumber; // Применяем отформатированный номер в поле ввода
  });
});