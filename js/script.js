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

// Form Validation
document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
}); 

// Number Validation
$('input[name="mobile"]').keypress(function(event){
    if (event.keyCode == 46 || event.keyCode == 8){
        //do nothing
    }
    else 
    {
        if (event.keyCode < 48 || event.keyCode > 57 ){
            event.preventDefault();	
        }	
    }
}
);

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

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

