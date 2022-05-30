var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });



// botton Move Up
var mybotton = document.getElementById('goup');

window.onscroll = function () {

    // console.log(scrollY)
    'user strict';

    if (window.pageYOffset >= 1700){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};

mybotton.onclick = function () {
    'user strict';

    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    });
}