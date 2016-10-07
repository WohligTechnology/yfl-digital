angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    // $scope.mySlides = [
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    // ];
})

.controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('BrandCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("branding-brief"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Branding Brief"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.textboxVal = false;
        $scope.showTextbox = function (value) {
                $scope.textboxVal = value == "y";
            }
            // $scope.hideTextbox = function() {
            //         $scope.showTextboxVal = false;
            //     }
            // $scope.formSubmitted = false;
            // $scope.submitForm = function (data) {
            //     console.log(data);
            //     $scope.formSubmitted = true;
            // }
    })
    .controller('WebCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("website-req"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Web Requirement"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.popup = false;
        $scope.popup2 = false;
        $scope.showpopup = function (value) {
            $scope.popup = value == "y";
            $scope.popup2 = value == "y";
        }
        $scope.textboxVal = false;
        $scope.showTextbox = function (value) {
                $scope.textboxVal = value == "y";
            }
            // $scope.formSubmitted = false;

        // $scope.submitForm = function (data) {
        //     console.log(data);
        //     $scope.formSubmitted = true;
        // }
    })

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;