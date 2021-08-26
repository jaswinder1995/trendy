$(document).ready(function(){ 
    
    $('.main_slider').slick({
        dots:false,
        infinite: true,
        speed: 300,
        slidesToShow:10,
        adaptiveHeight: true,
        prevArrow:'<span class="priv-arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
      });  
});
