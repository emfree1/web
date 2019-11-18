$('.count').counterUp({
    delay: 10,
    time: 1000
});
$(document).ready(function() {
  console.log($('.popap-botton'))
    $('.popap-botton').magnificPopup({type:'iframe', items:[{
      src: 'https://www.dailymotion.com/embed/video/xxgmlg#.UV71MasY3wE',
      title: 'Peter & Paul fortress in SPB'
    },]});
  });


$('.main-header').parallax({imageSrc: 'img/Rectangle2.png'});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

$("#myform").validate({
  rules: {
    email: {
        required: true,
        email: true
    },
    name: {
      required: true,
      minlength: 3
    }
  },
  messages: {
    email: {
      required: "Обов'язкове поле для заповнення",
      minlength: "Довжина емейлу повинна бути не менше 3 символів"
    }
  }
});

$('.menu-gamb').on('click',function(){
  $('.menu-gamb').toggleClass('active');
});

$('.menu-gamb').on('click', function() {
if($('.menu-gamb').hasClass('active')) {
  console.log('111');
  $('.menu-mobile').css('display', 'flex');
} else {
  console.log('222');
  $('.menu-mobile').css('display', 'none');
}
});
$('.menu-gamb').on('click', function() {
  if($('.menu-gamb').hasClass('active')) {
    $('.text').css('display', 'none');
  } else {
    $('.text').css('display', 'flex');
  }
});