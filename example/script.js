
$(function() {
    // animate height
    // ==============
    var menuHeight = function($menu) {
    	var $fake = $menu.clone().appendTo($menu.parent());
    	$fake.css({
    		maxHeight: '100%',
            height: 'auto',
    		opacity: 1,
    		transition: 'none',
    		visibility: 'hidden',
    		position: 'relative'
    	});
    	var height = $fake.outerHeight();
        $fake.remove();
    	return height;
    };
    var $menu = $('.js-height .menu');
    var height = menuHeight($menu);
    $('.js-height button').on('click', function() {
        if ($menu.hasClass('menu--on')) {
            $menu.removeAttr('style');
        }
        else {
            $menu.css({
                maxHeight: height,
                opacity: 1
            });
        }
        $menu.toggleClass('menu--on');
    });

    // animate translateY
    // ==================
    $('.js-simple button').on('click', function() {
        $('.js-simple').toggleClass('menu--on');
    });

    // expand inline
    // =============
    var $expandable = $('.expandable');
    $('.expandable input').on('click', function() {
        if ( $expandable.hasClass('expandable--on') ) {
            $('.expandable__content').one("transitionend", function(event) {
                $expandable.removeClass('expandable--on');
            });
        }
        else {
            $expandable.addClass('expandable--on');
        }
    });
});
