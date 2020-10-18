$(document).ready(function() {

    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', 'beer','child','non-alcohol','water','sevenPage','eightPage','ninetPage','contacts'],
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1100,
        licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
        afterResponsive: function(isResponsive){

        },
        onLeave: function(origin, destination, direction){

            footerLiner();
        }
    });

    function footerLiner(){

        if ($(window).width() > 1100) {
            $('.footer-line-js').css({'width':'0'});
            $('.footer-line-js').stop().animate({'width':'100%'},8000,function(){
                // fullpage_api.moveSectionDown();
            });
        }
    }
    
    $('body').on('click','.close-popup',function(e){
        e.preventDefault();
        var magnificPopup = $.magnificPopup.instance; 
        magnificPopup.close(); 
    })
    $('.inline-popup-trigger').magnificPopup({type:'inline',fixedContentPos:true});
    $('.mobile-btn-js').click(function(){
       
        $(this).toggleClass('active');
        $('.mobile-header__header').toggleClass('active');
        $('.mobile-header__bottom').stop().slideToggle();
    })
    $('.header-hamburder-js').click(function(){
        $('.window').toggleClass('active');
    });
    $('.mobile-header__arrow').click(function(){
        $(this).closest('li').find('ul').stop().slideToggle();
        $(this).toggleClass('active');
    })
    $('.window-close').click(function(){
        $('.window').removeClass('active');
    });
    $('body').on('click', '.full-slider__link', function (e){
        e.preventDefault();
        $(this).closest('.section').find('.full-slider').slick('slickGoTo',$(this).index());
    })
    $('.news-slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover:false,
        pauseOnFocus:false,
        pauseOnDotsHover:false,
        customPaging : function(slider, i) {
            i = parseInt(i);
            i++;
            if(i < 10){
                i = '0'+i;
            }
            return '<button>'+i+'</button>';
        },
        responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
      }
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }]
    });
    
    $('.full-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(this).find('.match-height').matchHeight();
    })
    $('.full-slider').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover:false,
        pauseOnFocus:false,
        pauseOnDotsHover:false,
        
        customPaging : function(slider, i) {
            i = parseInt(i);
            i++;
            if(i < 10){
                i = '0'+i;
            }
            return '<button>'+i+'</button>';
        },
        responsive: [
            {
              breakpoint: 990,
              settings: {
                adaptiveHeight:true

              }
            }]
    });
    
    
});

$(window).scroll(function() {
  if($(this).scrollTop() > 200) {
        $('.top-btn').addClass('active');
      } else {
        $('.top-btn').removeClass('active');
      }
      });
      $('.top-btn').click(function(e) {
        e.preventDefault();
     fullpage_api.moveTo(1,400);
  });