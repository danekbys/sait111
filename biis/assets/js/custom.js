

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
    

            $('header a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800);
                        return false;
                    }
                }
            });
          


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



