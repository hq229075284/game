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
    app.controller('detail_head',function($scope, $rootScope) {
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
        (function() {
            // middle_nav binding scroll event
            var nav = $(".middle_nav");

            function nav_position() {
                var nav_inite_top = nav.offset().top;
                $(window).scroll(function(e) {
                    console.log(nav_inite_top);
                    console.log($(this).scrollTop());
                    if (!(nav_inite_top > $(this).scrollTop())) {
                        if (!nav.hasClass("fixed")) {
                            nav.addClass("fixed");
                        }
                    } else {
                        if (nav.hasClass("fixed")) {
                            nav.removeClass("fixed");
                        }
                    }
                }).triggerHandler("scroll");
            }

            $(window).on("load", nav_position);
            $(window).on("resize", nav_position);
        })();



    });
})(jQuery);
