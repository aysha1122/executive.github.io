const nextIcon = '<img src="./images/service-vector2.svg" alt="right">';
const prevIcon = '<img src="./images/service-vector1.svg" alt="left" >';


$('.owl-carousel1').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
   // center:true,
     items:4,
   // responsiveClass:true,
    navText: [
        prevIcon,
        nextIcon
      ],
    responsive:{
        0:{
            items:1,
            center:false
        },
        600:{
            items:1,
            center:false
        },
        700:{
            items:2,
            center:false
        },
        991:{
            items:2,
            center:false
        },
        1000:{
            items:3,
            center:false
        },
        1016:{
            items:3,
            center:false
        },
        1199:{
            items:4,
            center:false
        },
        1200:{
            items:4
        }
        
    }
})

const nextIcon1 = '<img src="./images/service-vector2.svg" alt="right">';
const prevIcon1 = '<img src="./images/service-vector1.svg" alt="left" >';


$('.owl-carousel2').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    // items:5,
   // responsiveClass:true,
    navText: [
        prevIcon1,
        nextIcon1
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
            margin:0
        },
        700:{
            items:1,
        },
        768:{
            items:2,
        },
        991:{
            items:2,
        },
        1000:{
            items:2
        },
        1016:{
            items:2
        },
        1199:{
            items:2
        },
        1200:{
            items:2
        }
        
    }
})
$('.owl-carousel3').owlCarousel({
    loop:true,
    nav:true,
    // items:5,
   // responsiveClass:true,
//    autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:1,
        },
        768:{
            items:2,
        },
        991:{
            items:2,
        },
        1000:{
            items:2
        },
        1016:{
            items:2
        },
        1199:{
            items:2
        },
        1280:{
            items:2.3
        },
        1300:{
            items:2.34
        }
        
    }
})