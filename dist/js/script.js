$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/icons/icon-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/icons/icon-right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
      });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  
    function toggleClass(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');

// Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
        
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks'). fadeOut('fast');
    });


    $('.catalog-item__button').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__desc').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

   
    
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "?????????????? ???????? ??????",
                phone: "?????????????? ???????? ??????????????",
                email: {
                    required: "?????????????? ???????? ??????????",
                    emeil: "???? ?????????????????? ???????????? ???????????????? ??????????"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");


    // Smooth scroll and pageup
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    // Speed

    $("a[href^='#up']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // Animate

    new WOW().init();
   
});