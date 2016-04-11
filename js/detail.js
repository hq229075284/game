// angular
(function() {
    // $.noConflict();
    function carousel() {
        $("#lightslider").lightSlider({
            item: 1, //显示图片数
            speed: 1000, //移动速度
            auto: false, //自动轮播
            loop: true, //是否循环
            pause: 2000, //自动轮播时间间隔
            controls: false, //是否显示控制按钮
            thumbItem: 3, //缩略图显示张数
            pager: true, //圆点导航
            thumbMargin: 0, //
            currentPagerPosition: "middle",
            enableTouch: true,
            slideMargin: 0,
            gallery: true,
            autoWidth: false,
        });
    }

    var app = angular.module("detail", []);
    app.controller('detail_head', function($scope, $rootScope) {
        console.log(data[0]);
        $rootScope.data = data[0];
        console.log($rootScope);
        // $rootScope.convertSrc = function(url) {
        //     console.log($sce.trustAsResourceUrl(url));
        //     return $sce.trustAsResourceUrl(url);
        // };
    });

    app.controller('detail_body', function($scope) {
        // console.log($(".detail_body")[0]);
        $scope.$on('pathLoadOver', function(pathLoadOverEvent) {
            //下面是在li render完成后执行的js
            carousel();
        });
    });


    app.directive('imgPathLoad', function($timeout) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            restrict: 'A',
            link: function($scope, iElm, iAttrs, controller) {
                if ($scope.$last == true) {
                    $scope.$emit('pathLoadOver');
                }
            }
        };
    });


})();



// jquery
(function($) {
    $(function() {

        function adapt_screen() {
            if ($(window).outerWidth() < 768) {
                if ($("table").hasClass('table'))
                    $("table").removeClass('table');
            } else {
                if (!$("table").hasClass('table'))
                    $("table").addClass('table');
            }

        }
        adapt_screen();
        //nav scroll
        (function() {
            // middle_nav binding scroll event
            var nav = $(".middle_nav");
            var game_download = $(".game_download");
            var download_li = $("li:contains('游戏下载')");
            var info_li = $("li:contains('游戏介绍')");
            // console.log("one_nav");
            // console.log($(window).scroll(function(){}));
            function nav_position() {
                // var nav_inite_top = nav.offset().top;
                var nav_inite_top = $(".nav_hold").offset().top;
                $(window).off("scroll");
                $(window).scroll(function(e) {
                    // console.log(e.target);
                    // e.stopPropagation();
                    // console.log("nav_inite_top");
                    // console.log(nav_inite_top);
                    // console.log("$(this).scrollTop()");
                    // console.log($(this).scrollTop());
                    if (!(nav_inite_top > $(this).scrollTop())) {
                        if (!nav.hasClass("fixed")) {
                            nav.addClass("fixed");
                        }
                    } else {
                        if (nav.hasClass("fixed")) {
                            nav.removeClass("fixed");
                        }
                    }

                    //区域绑定标签
                    if (!$("body,html").is(":animated")) {
                        if (game_download.offset().top - $(this).scrollTop() < $(this).outerWidth() / 2) {
                            if (!download_li.hasClass('active')) {
                                download_li.addClass('active').siblings('li').removeClass('active');
                            }
                        } else {
                            if (!info_li.hasClass('active')) {
                                info_li.addClass('active').siblings('li').removeClass('active');
                            }
                        }
                    }

                    if (!$(".Top").is(":animated")) {
                        if ($(window).scrollTop() > 300) {
                            // console.log(typeof $(".Top").css("opacity"));
                            if ($(".Top").css("opacity") === "0") {
                                $(".Top").css("display", "block");
                                $(".Top").animate({
                                    "opacity": 1
                                }, 600);
                            }
                        } else {
                            if ($(".Top").css("opacity") === "1") {
                                $(".Top").animate({
                                    "opacity": 0
                                }, 600, function() {
                                    $(".Top").css("display", "none");
                                });
                            }
                        }
                    }


                }).triggerHandler("scroll");
            }

            $(window).on("load", function() {
                console.log("load");
                nav_position();
            });
            $(window).on("resize", function() {
                console.log("resize");
                nav_position();
                adapt_screen();
            });
        })();

        //nav li click 中间导航栏点击后的定位
        (function() {
            var nav_li = $(".middle_nav li");
            nav_li.click(function(e) {
                e.stopPropagation();
                console.log($(this).text());
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active').siblings('li').removeClass('active');
                }
                if (this.childNodes[1].data == "游戏下载") {
                    $("html,body").animate({
                        scrollTop: ($(".game_download").offset().top - 30)
                    }, 1000);
                } else {
                    $("html,body").animate({
                        scrollTop: ($(".detail_body").offset().top - 10)
                    }, 1000);
                }
            });
        })();

        //注册火箭返回页面顶部的动画
        (function() {

            $(".Top").click(function(event) {
                event.stopPropagation();
                console.log("click");
                if (!$(".Top").is(":animated")) {

                    if ($(".Top").css("opacity") === "1") {
                        // console.log("none");
                        $(".Top").animate({
                            "opacity": 0,
                            "bottom": "400px"
                        }, 600, function() {
                            $(this).css("bottom", "15px");
                        });

                        $("html,body").animate({
                            "scrollTop": 0
                        }, 600);
                    }
                }

            });

        })();

    });
})(jQuery);