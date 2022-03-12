$(window).on('load', function() {
  $('.loader').fadeOut(700);

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
});

$(document).ready(function() {

  const navLinks = document.querySelectorAll('.nav-item');
  const menuToggle = document.getElementById('navbarNav');
  navLinks.forEach((l) => {
      l.addEventListener('click', () => { 
        const windoww = $(window).width();
        if (windoww < 575) {
          const bsCollapse = new bootstrap.Collapse(menuToggle);
          bsCollapse.toggle();
          console.log("toggled");
        }
      });
  });

  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {      
        $navbar.collapse('hide');
    }
  });

  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 7000
  })

  var typed = new Typed('.typed', {
    strings: ['Web Developer'],
    typeSpeed: 70,
    loop: false,
    startDelay: 1000,
    showCursor: false
  });

  

  var skillsTopOffset = $('.skillsSection').offset().top;
  var statsTopOffset = $('.statsSection').offset().top;
  var countUpFinished = false;

  $(window).scroll(function() {

    // if (window.pageYOffset > skillsTopOffset - $(window).height() + 200 ) {
    //   $(function() {
    //     $('.chart').easyPieChart({
    //         easing: 'easeInOut',
    //         barColor: '#fff',
    //         trackColor: false,
    //         scaleColor: false,
    //         lineWidth: 4,
    //         size: 152,
    //         onStep: (from, to, percent) => {
    //           $(this.el).find('.percent').text(Math.round(percent));
    //         }
    //     });
    //   });
    // }

    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200 ) {
      $('.counter').each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
    
        element.countup(endVal);
        countUpFinished = true;
      });
    }

  });

  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });


  $('#filters a').click(function() {
    $('#filters .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });

    return false;
  });

  $('.navigate a').click(function(e) {
    e.preventDefault();
    console.log(this);
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    
    $('html, body').animate({
      scrollTop: targetPosition - 50
    }, 400, 'linear')
  });

});