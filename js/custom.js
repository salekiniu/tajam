
$(function(){
 //slider slick js
 $('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
});
    
 //slider slick js
 $('.feed-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: false,
  autoplaySpeed: 2000,
});
//venubox js
$('.venobox').venobox();   

//wow js
new WOW().init();
//back to top
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1000);
});   
//stiky menu
$(window).scroll(function(){
   var scrolling = $(this).scrollTop();
   if(scrolling > 300){
       $('.navbar').addClass('bg');
   }
    else{
        $('.navbar').removeClass('bg');
    }
    
    
    if(scrolling > 200){
       $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500);
    }
    
}); 
});