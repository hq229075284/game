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
            thumbItem: 5, //缩略图显示张数
            pager: true, //圆点导航
            thumbMargin: 0, //
            currentPagerPosition: "middle",
            enableTouch: true,
            slideMargin: 0,
            gallery: true,
            autoWidth:false,
        });
    }

    var app = angular.module("detail", []);
    app.controller('detail_head', function($scope, $rootScope) {
        $rootScope.data = data[0];
    });

    app.controller('detail_body', function($scope) {
    	// carousel();
        $scope.$on('pathLoadOver', function(pathLoadOverEvent) {
            //下面是在li render完成后执行的js
            console.log("this");
            console.log(this);
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
                    console.log("$scope");
                    console.log($scope);
                    console.log("iElm");
                    console.log(iElm);
                    console.log("iAttrs");
                    console.log(iAttrs);
                    console.log("controller");
                    console.log(controller);
                    // $scope.$apply(function(){iAttrs.src=iAttrs.ngSrc;});
                    // $timeout(function(){$scope.$emit('pathLoadOver')});
                    $scope.$emit('pathLoadOver');
                    console.log("iElm");
                    console.log(iElm);
                }
            }
        };
    });


})();





// jquery
(function($) {
    $(function() {
        console.log("light");

    });
})(jQuery);
