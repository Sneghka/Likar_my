    jQuery(document).ready(function () {
        jQuery('ul.sf-menu').superfish();

        var acoordContent = $('._accodList > li > p');
        var acoordCaption = $('._accodList > li > strong');

        $('._accodList > li > strong').click(function () {
            $(this).parent().siblings().find("strong").attr("class", "color1");
            $(this).parent().siblings().find("p").slideUp();
            $(this).attr("class", "color1 color2");
            $(this).next().slideDown();
        });

        $(window).scroll(function () {
            var heigthFromTop = $(window).scrollTop();
            var windowHeight = window.innerHeight;
            if (heigthFromTop > windowHeight / 2) {
                $("#toTop").fadeIn(600);
            }
            if (heigthFromTop < windowHeight / 2) {
                $("#toTop").fadeOut(400);
            }
        });

        $("#toTop").click(function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 800, 'swing');
        });


        /*parsed HTML*/
        $(function () {
            $(".maxheight").each(function () {
                $(this).contents().wrapAll("<div class='box_inner'></div>");
            })
            $(".maxheight2").each(function () {
                $(this).contents().wrapAll("<div class='box_inner'></div>");
            })
            $(".maxheight3").each(function () {
                $(this).contents().wrapAll("<div class='box_inner'></div>");
            })


        })
        /*add event*/
        $(window).bind("resize", height_handler).bind("load", height_handler)

        function height_handler() {
            if ($(window).width() > 465) {
                $(".maxheight").equalHeights();
            } else {
                $(".maxheight").equalHeights();
            }
            if ($(window).width() > 740) {
                $(".maxheight2").equalHeights();
            } else {
                $(".maxheight2").equalHeights();
            }
            if ($(window).width() > 740) {
                $(".maxheight3").equalHeights();
            } else {
                $(".maxheight3").equalHeights();
            }

            if ($(window).width() > 767) {
                $("#mobile-left-menu").removeClass("show");
                $(".vertical-menu-tab").removeClass("hide");
            }

        }
        /*glob function*/
        (function ($) {
            $.fn.equalHeights = function (minHeight, maxHeight) {
                tallest = (minHeight) ? minHeight : 0;
                this.each(function () {
                    if ($(">.box_inner", this).outerHeight() > tallest) {
                        tallest = $(">.box_inner", this).outerHeight()
                    }
                });
                if ((maxHeight) && tallest > maxHeight) tallest = maxHeight;
                return this.each(function () {
                    $(this).height(tallest)
                })
            }
        })(jQuery);


        $("button.vertical-menu-tab.options").click(function () {
            $('#mobile-left-menu').addClass("show");
            $(this).addClass("hide");
        });

        $("#close-left-menu").click(function () {
            $("#mobile-left-menu").removeClass("show");
            $("button.vertical-menu-tab.options").removeClass("hide");

        });
        $("button.vertical-menu-tab.doctor").click(function () {
            $('#mobile-right-menu').addClass("show");
            $(this).addClass("hide");
            $("button.vertical-menu-tab.options").addClass("hide");
        });

        $("#close-right-menu").click(function () {
            $("#mobile-right-menu").removeClass("show");
            $("button.vertical-menu-tab.doctor").removeClass("hide");
            $("button.vertical-menu-tab.options").removeClass("hide");

        });

        /***News html - make all images the same height****/
        var maxHeight = -1;
        $(".news .thumbnail figure").each(function () {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        $('.news .thumbnail figure').each(function () {
            $(this).height(maxHeight);
        });
        $('.news img[src*="news_img"]').each(function () {
            $(this).height(100 + '%');
            $(this).css("width", "auto");
        });


        /***Responsive tad in MSSiteModeEvent.html****/
        $(".tab-responsive-heading").click(function () {
            $(".menu-tab").removeClass("active");
            $("li[rel^='menu']").removeClass("active");
            $(".menu-tab").removeClass("in");


            var d_activeTab = $(this).attr("rel");
            $("li[rel= " + d_activeTab + "]").addClass("active");
            $("#" + d_activeTab).addClass("in");
            $("#" + d_activeTab).addClass("active");


            $(".tab-responsive-heading").removeClass("active");
            $(this).addClass("active");


        });



    });