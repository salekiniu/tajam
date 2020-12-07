var fullname = document.getElementById('fname');
var fullname_err = document.getElementById('fname_err');

var email = document.getElementById('email');
var email_err = document.getElementById('email_err');
var regex = /\S+@\S+\.\S+/;

var massege = document.getElementById('massege');
var msg_err = document.getElementById('msg_err');

function sub(){
  if(fullname.value == ''){
      fullname_err.innerHTML = 'Oi hala, nam lekh!';
      fullname.style.border = '1px solid red';
      fullname.focus();
      return false;
  }
  if(email.value == ''){
    email_err.innerHTML = 'Oi mail ID de!';
    email.style.border = '2px solid red';
    email.focus();
    return false;
  }

if(!regex.test(email.value)){
  email_err.innerHTML = 'thik thak kore mail id de!';
  email.style.border = '2px solid red';
  email.focus();
  return false;
  }
}
function errvalid(){
  if(fullname.value != ''){
      fullname_err.innerHTML = '';
      fullname.style.border = '2px solid green';
  }
  
  
  if(email.value != ''){
      email_err.innerHTML = '';
      email.style.border = '2px solid green';
  }
  
  
  if(massege.value != ''){
      msg_err.innerHTML = '';
      massege.style.border = '2px solid green';
  }
  

  
  
}



$(function(){
//slider banner js
$('.carousel').carousel({
  // interval: 1000,
  autoplaySpeed: 2000,
})
    
 //slider slick js
 $('.feed-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 2000,
});
//venubox js
$('.venobox').venobox();   
    
});