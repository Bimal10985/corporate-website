$(function () {
  AOS.init();
  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    loop:true,
  autoplay:{
  delay:3000,
  disableOnInteraction:false,
},
    });
  AOS.refresh();
});


window.onscroll = function(){
if (window.scrollY > 100){
    
    $('.navbar').addClass('solid');
}
else{
    $('.navbar').removeClass('solid');
    
}
}