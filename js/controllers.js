angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('BrandCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("branding-brief"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Branding Brief"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.popup = false;
        $scope.popup2 = false;
        $scope.showpopup = function(value) {
            $scope.popup = value == "y";
            $scope.popup2 = value == "y";
        }
        $scope.textboxVal = false;
        $scope.showTextbox = function(value) {
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

        $scope.formData = {};
        $scope.formData.brandBriefArr = [];
        $scope.formData.personalityBrandArr = [];
        $scope.formData.customerResArr = [];
        $scope.formData.brandLogosArr = [];
        $scope.formData.finishingUpArr = [];
        $scope.formData.brandFontsArr = [];
        $scope.submitFormData = function(formData) {
            if ($scope.formData.brandBriefArr.length > 0) {
                _.each($scope.formData.brandBriefArr, function(n) {
                    $scope.formData.brandBrief += n + ",";
                });
            };
        }



        $scope.brandBreifFunction = function(val, index) {
            var foundIndex = _.findIndex($scope.formData.brandBriefArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.brandBriefArr.push(val);
            } else {
                $scope.formData.brandBriefArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.brandBriefArr);
        };
        $scope.brandChracteristics = function(val) {
            var foundIndex = _.findIndex($scope.formData.personalityBrandArr, function(key) {
                return key == val;
            })
            if (foundIndex == -1) {
                $scope.formData.personalityBrandArr.push(val);
            } else {
                $scope.formData.personalityBrandArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.personalityBrandArr);
        };
        $scope.customerRes = function(val) {

            var foundIndex = _.findIndex($scope.formData.customerResArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.customerResArr.push(val);
            } else {
                $scope.formData.customerResArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.customerResArr);

        };
        $scope.brandLogo = function(val) {
            var foundIndex = _.findIndex($scope.formData.brandLogosArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.brandLogosArr.push(val);

            } else {
                $scope.formData.brandLogosArr.splice(foundIndex,1);
            }
            console.log($scope.formData.brandLogosArr);
        };
        $scope.finishingUp = function(val) {
            console.log(val);
            var foundIndex = _.findIndex($scope.formData.finishingUpArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.finishingUpArr.push(val);
            } else {
                $scope.formData.finishingUpArr.splice(foundIndex,1);
            }
            console.log($scope.formData.finishingUpArr);
        };
        $scope.brandFont=function(val){
          var foundIndex =_.findIndex($scope.formData.brandFontsArr,function(key){
            return key == val ;
          });
          if (foundIndex == -1) {
            $scope.formData.brandFontsArr.push(val)
          }else {
            $scope.formData.brandFontsArr.splice(foundIndex,1);
          };
          console.log($scope.formData.brandFontsArr);
        }

    })
    .controller('WebCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("website-req"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Web Requirement"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.popup = false;
        $scope.popup2 = false;
        $scope.showpopup = function(value) {
            $scope.popup = value == "y";
        }
        $scope.showpopups = function(value) {
            $scope.popup2 = value == "y";
        }
        $scope.textboxVal = false;
        $scope.showTextbox = function(value) {
                $scope.textboxVal = value == "y";
            }
          $scope.formData={};
          $scope.formData.requirementsArr=[];
          $scope.formData.websiteFeaturesArr=[];
          $scope.webAppRequirements=function(val){
            var foundIndex = _.findIndex($scope.formData.requirementsArr,function(key){
              return key == val;
            });
            if (foundIndex == -1) {
              $scope.formData.requirementsArr.push(val);
            }else {
              $scope.formData.requirementsArr.splice(foundIndex,1);
            };
            console.log($scope.formData.requirementsArr);
          };
          $scope.websiteFeatures=function(val){
            var foundIndex = _.findIndex($scope.formData.websiteFeaturesArr, function(key){
              return key == val ;
            });
            if (foundIndex == -1) {
              $scope.formData.websiteFeaturesArr.push(val);
            }else {
              $scope.formData.websiteFeaturesArr.splice(foundIndex,1);

            };
            console.log($scope.formData.websiteFeaturesArr);
          }
    })

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
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
