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

  $('#slides').superslides({
    play: 5000,
    animation: 'fade',
    pagination: false
  });

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

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200 ) {
      $(function() {
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: (from, to, percent) => {
              $(this.el).find('.percent').text(Math.round(percent));
            }
        });
      });
    }

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

  $('#navigation li a').click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;

    $('html, body').animate({
      scrollTop: targetPosition - 50
    }, 400, 'linear')
  });


});