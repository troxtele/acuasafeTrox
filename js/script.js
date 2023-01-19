const nav = document.querySelector("header");
const scrollTopBtn = document.querySelector(".scroll_top");
window.addEventListener("scroll", () => {
  // header Drop down
  if (window.scrollY > 20) {
    nav.classList.add("drop-shadow-lg");
  } else {
    nav.classList.remove("drop-shadow-lg");
  }
  // Scroll to top
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add("bottom-14");
    scrollTopBtn.classList.remove("-bottom-[100px]");
  } else {
    scrollTopBtn.classList.add("-bottom-[100px]");
    scrollTopBtn.classList.remove("bottom-14");
  }
});

// Scroll to Top Click
scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document
  .querySelector("body")
  .addEventListener("click", console.log("clicked by window"));

// ************************ Sliders

// Home client Slider
let homeSlider = new Swiper(".home_client_slider", {
  slidesPerView: 0,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".home_pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
// About Client Slider
let swiper = new Swiper(".about_client_slider", {
  slidesPerView: 0,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".client_pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

// Home Carousel
$(document).ready(function () {
  if ($(".hero_slider").length) {
    $(".hero_slider").owlCarousel({
      dots: false,
      loop: true,
      items: 1,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 1000,
      autoplay: 6000,
    });
  }
});
