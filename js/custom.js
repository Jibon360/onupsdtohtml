$(document).ready(function(){
  // NAVBAR STICKY
  $(window).on('scroll',function(){
    var scroll=$(window).scrollTop();
    if(scroll >=50){
      $("nav").addClass("bg-nav");

    }
    else{
      $("nav").removeClass("bg-nav");


    }

  });
        // collapse
        $(document).on("click", ".navbar-collapse.show", function (e) {
          $(e.target).is("a") && $(this).collapse("hide")
      }),    // 

// SCROLL TO TOP

  $(window).on("scroll",function(){
    var top=$(window).scrollTop();
    if(top>100){
        $('.scroll-top').fadeIn();

    }
    else{
        $('.scroll-top').fadeOut();


    }

});

    // MIXITUP JS
    var mixer = mixitup('.logo');

// COUNTER UP JS


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    


// GOOGLE MAP

var map = new GMaps({
    el: '#map',
    lat: -12.043333,
    lng: -77.028333
  });

  var map;
  $(document).ready(function(){
    map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333,
      zoomControl : true,
      zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
  });



  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
  });

   

});

