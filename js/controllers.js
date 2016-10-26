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
        $scope.formData.accomplish = '';
        $scope.formData.characteristics = '';
        $scope.formData.interactionBrand = '';
        $scope.formData.logoType = '';
        $scope.formData.brandFont = '';
        $scope.formData.brandIdentity = '';

        $scope.submitBrandForm = function(formData) {

            if ($scope.formData.elaborate != '') {
                $scope.brandBreifFunction($scope.formData.elaborate);
            }


            if ($scope.formData.brandBriefArr.length > 0) {
                $scope.selectaccomplish = false;
                _.each($scope.formData.brandBriefArr, function(n) {
                    $scope.formData.accomplish += n + ",";
                });
            }
            else {
                $scope.selectaccomplish = true;
            };
            if ($scope.formData.interacting.myother != '') {
                $scope.brandChracteristics($scope.formData.interacting.myother);
            };

            if ($scope.formData.personalityBrandArr.length > 0) {
                $scope.selectcharacteristics = false;
                _.each($scope.formData.personalityBrandArr, function(n) {
                    $scope.formData.characteristics += n + ",";
                });
            }
            else {
                $scope.selectcharacteristics = true
            };

            if ($scope.formData.customerResArr.length > 0) {
                $scope.selectinteractionBrand = false;
                _.each($scope.formData.customerResArr, function(n) {
                    $scope.formData.interactionBrand += n + ",";
                });
            }
            else {
                $scope.selectinteractionBrand = true;
            };

            if ($scope.formData.brandLogosArr.length > 0) {
                $scope.selectbrandLogo = false;
                _.each($scope.formData.brandLogosArr, function(n) {
                    $scope.formData.logoType += n + ",";
                });
            }
             else {
                $scope.selectbrandLogo = true;
            };
            if ($scope.formData.brandFontsArr.length > 0) {
                $scope.selectbrandFont = false;
                _.each($scope.formData.brandFontsArr, function(n) {
                    $scope.formData.brandFont += n + ",";
                });
            }
            else {
                $scope.selectbrandFont = true;
            };

            if ($scope.formData.intention.myother != '') {
                $scope.finishingUp($scope.formData.intention.myother);
            }

            if ($scope.formData.finishingUpArr.length > 0) {
                $scope.selectbrandIdentity = false;
                _.each($scope.formData.finishingUpArr, function(n) {
                    $scope.formData.brandIdentity += n + ",";
                });
            }
             else {
                $scope.selectbrandIdentity = true;
            }


if (formData) {
  console.log("formData",formData);
  NavigationService.brandingBrief(formData,function(data){
    console.log("data",data);
  })
}


        }



        $scope.brandBreifFunction = function(val) {
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
                $scope.formData.brandLogosArr.splice(foundIndex, 1);
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
                $scope.formData.finishingUpArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.finishingUpArr);
        };
        $scope.brandFont = function(val) {
            var foundIndex = _.findIndex($scope.formData.brandFontsArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.brandFontsArr.push(val)
            } else {
                $scope.formData.brandFontsArr.splice(foundIndex, 1);
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
        $scope.formData = {};
        $scope.formData.requirementsArr = [];
        $scope.formData.websiteFeaturesArr = [];
        $scope.formData.contentTypeArr = [];
        $scope.formData.contentType = ''
        $scope.formData.requirements = '';
        $scope.formData.websiteFeatures = '';
        $scope.submitWebForm = function(formData) {

            if ($scope.formData.format.myothercontent != '' && $scope.formData.format.myothercontent) {
                $scope.contentType(formData.format.myothercontent);
            }
            if ($scope.formData.contentTypeArr.length > 0) {
                $scope.selectContentType = false;
                _.each($scope.formData.contentTypeArr, function(n) {
                    $scope.formData.contentType += n + ",";
                });


            } else {
                $scope.selectContentType = true;
            }
            if ($scope.formData.requirement.myother != '' && $scope.formData.requirement.myother) {
                $scope.webAppRequirements($scope.formData.requirement.myother);
            }

            if ($scope.formData.requirementsArr.length > 0) {
                $scope.selectrequirements = false;
                _.each($scope.formData.requirementsArr, function(n) {
                    $scope.formData.requirements += n + ",";
                });
            } else {
                $scope.selectrequirements = true;
            }
            if ($scope.formData.features.myotherFeature != '' && $scope.formData.features.myotherFeature) {
                $scope.websiteFeatures($scope.formData.features.myotherFeature);
            }

            if ($scope.formData.websiteFeaturesArr.length > 0) {
                $scope.selectwebsiteFeatures = false;
                _.each($scope.formData.websiteFeaturesArr, function(n) {
                    $scope.formData.websiteFeatures += n + ",";
                });

            } else {
                $scope.selectwebsiteFeatures = true;
            }


            console.log("formData", formData);
            NavigationService.websiteReq(formData, function(data) {
                console.log("formData", formData);
                console.log("data", data);
                if (data.value === true) {
                    $scope.formComplete = true
                    $timeout(function() {
                        $scope.formComplete = false;
                        $scope.formData = {};
                        $scope.formData.requirementsArr = [];
                        $scope.formData.websiteFeaturesArr = [];
                        $scope.formData.contentTypeArr = [];
                        $scope.formData.contentType = ''
                        $scope.formData.requirements = '';
                        $scope.formData.websiteFeatures = '';


                    }, 2000);
                }
            })


        }
        $scope.webAppRequirements = function(val) {
            var foundIndex = _.findIndex($scope.formData.requirementsArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.requirementsArr.push(val);
            } else {
                $scope.formData.requirementsArr.splice(foundIndex, 1);
            };
            console.log($scope.formData.requirementsArr);
        };
        $scope.websiteFeatures = function(val) {
            var foundIndex = _.findIndex($scope.formData.websiteFeaturesArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.websiteFeaturesArr.push(val);
            } else {
                $scope.formData.websiteFeaturesArr.splice(foundIndex, 1);

            };
            console.log($scope.formData.websiteFeaturesArr);
        }
        $scope.contentType = function(val) {
            var foundIndex = _.findIndex($scope.formData.contentTypeArr, function(key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.contentTypeArr.push(val);
            } else {
                $scope.formData.contentTypeArr.splice(foundIndex, 1);

            };
            console.log($scope.formData.contentTypeArr);
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
