function carousel_creator(class_name){
	if ($(class_name)){
		$(class_name).owlCarousel ({
			loop:false,
		    margin:0,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        700:{
		            items:2,
		            nav:true
		        },
		        960:{
		            items:4,
		            nav:true
		        },
		    },
		    navText:['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>']
		});
	}
}

jQuery(document).ready(function($){
	
	//Click event to scroll to top
	$('#go-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	carousel_creator('.product-carousel');

	$('.search-link,#topsearch form button').click(function(e){
		e.preventDefault();
		$('#topsearch').toggleClass('active');
	});
});




! function($) {
    $(document).ready(function() {
        var $btn = $('.btn-navbar'),
            $nav = null,
            $fixeditems = null;
        if (!$btn.length) {
            return;
        }
        $(document.documentElement).addClass('off-canvas-ready');
        $nav = $('<div class="page-main-canvas" />').appendTo($('<div id="off-canvas-nav"></div>').appendTo(document.body));
        $($btn.data('target')).clone().appendTo($nav);
        $nav.find('ul.nav-social').remove();
        $nav.find('ul.navbar-nav').removeClass('collapse');

        $nav.find('ul.navbar-nav>*').removeClass('dropdown mega-dropdown dropdown-menu mega-dropdown-menu row col-sm-3')

        $btn.click(function(e) {
            if ($(this).data('off-canvas') == 'show') {
                hideNav();
            } else {
                showNav();
                $('body').append('<a class="exit-cavas" href="#">&nbsp;</a>');
            }
            return false;
        });
        var posNav = function() {
                var t = $(window).scrollTop();
                if (t < $nav.position().top) $nav.css('top', t);
            },
            bdHideNav = function(e) {
                e.preventDefault();
                hideNav();
                return false;
            },
            showNav = function() {
                $('html').addClass('off-canvas');
                $nav.css('top', $(window).scrollTop());
                wpfix(1);
                setTimeout(function() {
                    $btn.data('off-canvas', 'show');
                    $('html').addClass('off-canvas-enabled');
                    $(window).bind('scroll touchmove', posNav);
                    $('#off-canvas-nav').bind('click', function(e) {
                        e.stopPropagation();
                    });
                    $('#off-canvas-nav a').bind('click', hideNav);
                    $('html').bind('click', bdHideNav);
                }, 50);
                setTimeout(function() {
                    wpfix(2);
                }, 1000);
            },
            hideNav = function() {
                $(window).unbind('scroll touchmove', posNav);
                $('#off-canvas-nav').unbind('click');
                $('#off-canvas-nav a').unbind('click', hideNav);
                $('html').unbind('click', bdHideNav);
                $('html').removeClass('off-canvas-enabled');
                $btn.data('off-canvas', 'hide');
                setTimeout(function() {
                    $('html').removeClass('off-canvas');
                }, 600);
                $('.exit-cavas').remove();
            },
            wpfix = function(step) {
                if ($fixeditems == -1) {
                    return;
                }
                if (!$fixeditems) {
                    $fixeditems = $('body').children().filter(function() {
                        return $(this).css('position') === 'fixed'
                    });
                    if (!$fixeditems.length) {
                        $fixeditems = -1;
                        return;
                    }
                }
                if (step == 1) {
                    $fixeditems.css({
                        'position': 'absolute',
                        'top': $(window).scrollTop() + 'px'
                    });
                } else {
                    $fixeditems.css({
                        'position': '',
                        'top': ''
                    });
                }
            };
    })
}(jQuery);