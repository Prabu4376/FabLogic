$(document).ready(function(){

    $('#menu-btn').click(function(){
        if ($('#menu-icon').hasClass('fa-bars')){
            $('#menu-icon').removeClass('fa-bars');
            $('#menu-icon').addClass('fa-times');
        } else {
            $('#menu-icon').addClass('fa-bars'); 
            $('#menu-icon').removeClass('fa-times'); 
        }
    })

    // Number Counter
            
$('.counting').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');

$({ countNum: $this.text()}).animate({
    countNum: countTo
},
{

    duration: 3000,
    easing:'linear',
    step: function() {
        $this.text(Math.floor(this.countNum));
    },
        complete: function() {
        $this.text(this.countNum);
    }

    });  
});



});

var owl = $("#owl-carousal-1");
owl.owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 70,
    responsive: {
    0: {
        items: 1,
    },
    560:{
        items:2
    },
    767: {
        items: 3,
    },
    960: {
        items: 4,
    },
    1200: {
        items: 5,
    },
    },
});

var owl = $("#owl-carousal-2");
owl.owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 70,
    
    responsive: {
    0: {
        items: 1,
    },
    767: {
        items: 1,
    },
    960: {
        items: 2,
    },
    1400: {
        items: 2,
    },
    },
});

var owl = $("#owl-carousal-3");
owl.owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 70,
    
    responsive: {
    0: {
        items: 1,
    },
    767: {
        items: 1,
    },
    768:{
        items:2,
    },
    960: {
        items: 3,
    },
    1400: {
        items: 3,
    },
    },
});

