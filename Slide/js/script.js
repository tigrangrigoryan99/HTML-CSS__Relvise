/* 
    Stexcum enq SWIPER
    vor tag petka darna slider nra class-@ dnum enq '' mej.
*/

/* 
    Ete slider-in avelacnum enq 'flex' apa sax xaxtvuma, 
    uxxelu hamar en element@ vori mej gtnvuma slider@ 
    'min-width: 0;' enq dnum. 
*/

/* 
    Tarber xndirneri hamar ustanovka enq anum, 
    slideri class in dimelu hamar koxq@ dnum enq {} 
    ev mej@ talis arjeqner. 
*/

/* 
    IMport enq anum Swiper-i methodneric qani vor 
    default ayn sax chi berum. 
*/

const swiper = new Swiper('.image-slider', {
    /*
        Arrow, avelacnuma koxi slaqner.
    */ 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    /*
        Pagination, avelacnuma taki keter, ete 'clickable: true'
        apa sexmeluc et keterin poxuma nkar@.
    */
    pagination: {
        el: '.swiper-pagination',
        
            clickable: true,
            dynamicBullets: true,
            // renderBullet: function(index, className) {
            //     return `<span class=${className}> ${index + 1} </span>`;
            // },
        
        /*
            Fraction, sa 1/5 es texqova talsi taki nshum@, 
            petka uxxaki 'type: 'fraction'' dnel.

            Ka naev renderFraction, stex vorpes argument karanq,
            cankacac popoxakan grenq.
        */
        
        /* 
           type: 'fraction',
           renderFraction: function(currentClass, totalClass) {
             return `Poto <span class=${currentClass}></span>
                from 
                <span class=${totalClass}></span>`
          } 
        */
        
       /*
           Progressbar, sa verev@ liniaya avelcanum vor@ slaydi
           avartin motenaluc lcvuma.
       */
        // type: 'progressbar', 
    },

    /*
        Scroll
    */
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    // mknikov sharjelu hamar
        simulateTouch: true,
    // 
        tauchRAtio: 1,
    //
        touchAngle: 45,
    // kursory derqa sarqum
        grabCursor: true,
    //
        slideToClickedSlide: true,

    /* 
        Slider Swiper-@ enqan moshniya vor uni hash ev browzer-i
        arrow-s ov gorcuma u path-um cuyca talis arandin pather.
    */
    hashNavigation: {
        watchState: true,
    },

    /*
        'keyboard' sranov kargavorum enq klaviaturayov tertel@ 
        ev mknikov.
    */
    keyboard: {
    // miacnuma
        enabled: true,
    // erb tesadashtuma
        onlyInViewport: true,
    // pageUp, pageDown
        pageUpDown: true,
   },

    /*
        'mousewheel' sra mijocov mkniki scrollov enq poxum.
    */
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider",
    },

   /*
        'autoHeight' sra mijocov slayd@ vercnuma amen nkari chapsov,
        sa aveli harmara erb ka text tarber chapseri.
   */
        // autoHeight: true,

   /*
        Sra mijocov dnum enq qani nkar cuyc ta slaydum.
        sa naev gorcuma erb mi nkara, tex@ zbaxecnuma 
   */
        // slidesPerView: 3, // 'auto', ete chgitenq kavelana nkar te che
   
   /*
       Sa ete mi nkara vorpeszi 'slidesPerView'-i jamanak scroll
       cuyc chta dnum enq vro@ heracnuma, nkar avelacnelu depqum 
       avtomat scroll beruma. 
   */
        watchOverflow: true,

   // Sra mijocov nkarneri aranq tex enq toxum.
        spaceBetween: 30,

   // Sra mijocov tertuma miangamic tvac arjceqov nkar
        slidesPerGroup: 1,

   // Sra mijocov sliden texadrum enq centrum
        centeredSlides: false,
   
   /*
        Ete uzum enq shrjenq sliden apaka commentum enq 'centeredSlides'
        ev html-um tvyal slider-i containeri tag-um dnum enq 'dir=rtl'.
   */

   // skusma tvyal slider-ic
        initialSlide: 0,

   // Sarquma syuner, chi gorcum ete 'autoHeight: auto' e drac linum.
        slidesPerColumn: 1,

   // Bezkonechni slide a sarqum.
        loop: false,

    /*
       1. Bezkanechni-i jamanak scroll petkchi, 
       2. ete column-neri qanak 1-ic meca loop chi gorcelu,
       3. ete slidesPerView ete draca auto apa petka ruchnoy loop tanq
    */

    // ruchnoy loop qanak
        loopedSlides: 0,

    // Ka 'freeMode' sra mijocov azad tertum enq lentan
        freeMode: true,

    /*
        Ka 'Autoplay' svoystvan vor@ slayd@ avtomat sharjuma
    */
        // autoplay: {
        //     delay: 1000,
        //     // hasnelov slaydi verjin kangnuma
        //     stopOnLastSlide: true,
        //     // menq slayd henc tertecinq avtomat kangnuma
        //     disableOnInteraction: false,
        // },
    
    // Speed aragutyunna talis 
        // speed: 1500,

    // Swiper aveli hora qani vor karuma sarqi vertiqal list
        direction: 'horizontal',

    // Ka 'effect' svoystva vor@ henc talisa slide, fade ev ayln
        effect: 'slide',

        // effect: 'fade', // shoxkov poxuma
            // fadeEffect: {

            //     crossFade: true,
            // },
        // effect: 'flip', // shrjuma nkar@ horizonakan
    
        //     flipEffect: {
        //         // Shoxk
        //             slideShadows: true,
        //         // crossFade: true,
        //             limitRotation: true,
        //     },

        // effect: 'cube', // Sa  nkar@ 3D-i nman a sarqum 

        // cubeEffect: {
        //     slideShadows: true,
        //     shadow: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94
        // },

        // effect: 'coverflow', 

        // coverflowEffect: {
        //     rotate: 20,
        //     stretch: 50,
        //     slideShadows: true,
        // }

        // 'Breakpoints' sra mijocov dnum enq chaps ev poxelov
        // ekrani chaps@ poxvuma tvac arjecq@.

        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     480: {
        //         slidesPerView: 2,
        //     },
        //     992: {
        //         slidesPerView: 3,
        //     }
        // }

        // Lazy loading stexcelu hamar nkarneri html-um enq anum
        // tvyal tag-i mej dnum enq 'data-src=./img/imge.jpg'
        // 'src' atributi mej mi poqr nkar enq talis ev talis enq
        // "class='swiper-lazy'" ev 'img' tagi mot stexcum enq mi
        // tag "class='swiper-lazy-preloader'"

        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: false,
        },

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        // Sra mijocov nkari vra sexmeluc mecanum e 
        zoom: {
            maxRatio: 5,
            minRatio: 1,
        },

        // thumbs-but mater, sra mijocov kargavorvuma slide-i 
        // nerqevi nkarner@.
        thumbs: {
            swiper: {
                el: '.image-mini-slider',
                slidesPerView: 5,
            }
        },
});

// nerqin slide-i kargavorum@,sarqum enq nor Slider
    // const swiper1 = new Swiper('.image-in-slider', {
    //     grabCursor: true,

    //     pagination: {
    //         el: 'swiper-pagination',
    //         clickable: true,
    //     },

    //     nested: true, // sa nra hamar vor ankax gorci,
    // naev slideToClickedSlide: false-enq dnum
    // });
 
    /* 
        Linuma depqer erb petka mi slider-@ miacnenq myusin, dra hamar
        stexcum enq erku slider 'const'-ov heto et 2 slider ner@ kpcnum irar orinak

        swiper.controller.control = swiper1;
        swiper1.controller.control = swiper;
    */


// Linum en depqer erb petka slider demic cuyc chta ayl sexmeluc
// dra hamar anum enq hetevyal@
// {   
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true
// }

// ka naev 'parallax' true dnelov sa toxuma vor 'background-img'
// dnenq ev hesh karavarneq 


// Ete slide stxecvuma ekac tvyalneric apa stexcum enq virtual slide
// virtual: {
//     slides: (function() {
//         let slide = [],
//         for (let i=0; i < 7; i++) {
//             slide.push(`<div class=""image-slider__text>Slide N${i}</div>`)
//         }
//         return slide;
//     }()),
// }

// karanq ete ashxatum enq erku slide -i het let ov nshanakenq
// heto ashxatneq nra parametreri het or.

// let swiper = swiper1.slides.length;
// swiper1.params.speed = 3000;



// Method-neri ognutyamb menq harmar gorcum enq swiper-i net, or.

// swiper.update();
// swiper.slideTo(2, 800);


// Iradardutyan jamank el karanq poxenq sax
// on: {
//     init: function () {
//         console.log('Slider init');
//     },

//     slideChange: function() {
//         console.log('Slide change');
//     }
// }

// swiper.on('slideChange', function() {
//     console.log('Slide');
// });