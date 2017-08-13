

 $(document).on('ready', function() {    
    $('.b-slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });

    $('.news-slider').slick({
      infinite: true,
      dots: false,

      slidesToShow: 3,
      slidesToScroll: 1,
         responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
   
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

      /*Header slider initialization*/
$(function(){
  $('.slider').glide({
    autoplay: 3500,
    hoverpause: true, // set to false for nonstop rotate
    arrowRightText: '&rarr;',
    arrowLeftText: '&larr;'
  });
});
});

 
/* Объявляем переменную, хранящую текущий язык */
var lang = document.querySelector('.lang-current').innerHTML;


document.addEventListener('DOMContentLoaded', function() {
  /* Имитируем поведение ссылки при наведении/убирании курсора для блока .lang-current*/
  document.querySelector('.lang-current').addEventListener('mouseover', function() {    
    this.classList.add('hover');  
  });

  document.querySelector('.lang-current').addEventListener('mouseout', function() { 
    this.classList.remove('hover');
  });
  /* Раскрываем список языков при клике на блок .lang-current*/
  document.querySelector('.lang-current').addEventListener('click', function() {
    document.querySelector('.lang-selection').classList.remove('hidden');
  });
  
  /* Имитируем поведение ссылок для блоков с названиями языков */
  document.querySelector('.lang-selection').onmouseover = function(e) {
    var target = event.target;    
    target.classList.add('hover');
  }
  
  document.querySelector('.lang-selection').onmouseout = function(e) {
    var target = event.target;    
    target.classList.remove('hover');
  }
  
  /* При клике на один из языков - перестроение списка языков и изменение текущего языка в .lang-current. Для определения, на какой из блоков языков был клик, используем всплытие. Сворачиваем .lang-selection.*/
  document.querySelector('.lang-selection').onclick = function(e) {
    var target = event.target;
    
    lang = target.innerHTML;
    
    document.querySelector('.lang-current').innerHTML = lang;
    
    this.classList.add('hidden');
    
    switch(lang) {
      case 'RUS':
      this.innerHTML = '<div class=' + '"lang-type rus"' + '>RUS</div>' + '<div class=' + '"lang-type ukr"' + '>UKR</div>' + '<div class=' + '"lang-type eng"' + '>ENG</div>';
      break;

      case 'UKR':
      this.innerHTML = '<div class=' + '"lang-type ukr"' + '>UKR</div>' + '<div class=' + '"lang-type rus"' + '>RUS</div>' + '<div class=' + '"lang-type eng"' + '>ENG</div>';
      break;
      
      case 'ENG':
      this.innerHTML = '<div class=' + '"lang-type eng"' + '>ENG</div>' + '<div class=' + '"lang-type ukr"' + '>UKR</div>' + '<div class=' + '"lang-type rus"' + '>RUS</div>';
      break;
    }

  }


});