$(function(){
    var mixer = mixitup('.portfolio__content');
    $('.slider__inner').slick({
        dots:true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow-right"></button>'
    })
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
