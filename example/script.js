
$(function() {
    $('.button-container').each(function() {
        var $this = $(this);
        var $dropdown = $this.find('.thing');
        var $button = $this.find('button');

        $dropdown.css({
            transform: 'translateY(-100%)'
        });

        $button.on('click', function() {
            if ( $this.hasClass('active') ) {
                $dropdown[0].style.transform = 'translateY(-100%)';
                $dropdown.css({
                    opacity: 0
                });
            }
            else {
                $dropdown[0].style.transform = 'translateY(0)';
                $dropdown.css({
                    opacity: 1
                });
            }
            $this.toggleClass('active');
        });
    });
});