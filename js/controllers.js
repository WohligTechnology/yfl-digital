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
        $scope.formComplete = false;
        $scope.formData.brandBriefArr = [];
        $scope.formData.personalityBrandArr = [];
        $scope.formData.customerResArr = [];
        $scope.formData.brandLogosArr = [];
        $scope.formData.finishingUpArr = [];
        $scope.formData.brandFontsArr = [];

        $scope.selectaccomplish = false;
        $scope.selectcharacteristics = false;


        $scope.submitBrandForm = function(formData) {

            if (formData.elaboratemodel != '' && formData.elaboratemodel) {
                $scope.brandBreifFunction(formData.elaboratemodel);
              }
                if ($scope.formData.brandBriefArr.length > 0) {
                    $scope.selectaccomplish = false;
                    $scope.formData.accomplish = "";
                    _.each($scope.formData.brandBriefArr, function(n) {
                        $scope.formData.accomplish += n + ",";
                    });
                    $scope.formData.accomplish = $scope.formData.accomplish.substring(0, ($scope.formData.accomplish.length - 1));
                  } else {

                    $scope.selectaccomplish = true;
                }


              if ($scope.formData.personalityBrandArr.length > 0) {
                $scope.selectcharacteristics = false;
                $scope.formData.characteristics = "";
                _.each($scope.formData.personalityBrandArr, function(n) {
                    $scope.formData.characteristics += n + ",";
                });
                  $scope.formData.characteristics = $scope.formData.characteristics.substring(0, ($scope.formData.characteristics.length - 1));
            } else {
                $scope.selectcharacteristics = true
            };
            if (formData.model != '' && formData.model) {
                $scope.customerRes(formData.model);
              }
                if ($scope.formData.customerResArr.length > 0) {
                    $scope.selectinteractionBrand = false;
                    $scope.formData.interactionBrand = " ";
                    _.each($scope.formData.customerResArr, function(n) {
                        $scope.formData.interactionBrand += n + ",";
                    });
                      $scope.formData.interactionBrand = $scope.formData.interactionBrand.substring(0, ($scope.formData.interactionBrand.length - 1));
                } else {
                    $scope.selectinteractionBrand = true;
                };




            if ($scope.formData.brandLogosArr.length > 0) {
                $scope.selectbrandLogo = false;
                $scope.formData.logoType = "";
                _.each($scope.formData.brandLogosArr, function(n) {
                    $scope.formData.logoType += n + ",";
                });
                  $scope.formData.logoType = $scope.formData.logoType.substring(0, ($scope.formData.logoType.length - 1));
            } else {
                $scope.selectbrandLogo = true;
            };
            if ($scope.formData.brandFontsArr.length > 0) {
                $scope.selectbrandFont = false;
                $scope.formData.brandFont = ""
                _.each($scope.formData.brandFontsArr, function(n) {
                    $scope.formData.brandFont += n + ",";
                });
                  $scope.formData.brandFont = $scope.formData.brandFont.substring(0, ($scope.formData.brandFont.length - 1));
            } else {
                $scope.selectbrandFont = true;
            };


            if (formData.models != '' && formData.models) {
                $scope.finishingUp(formData.models);
              }
                if ($scope.formData.finishingUpArr.length > 0) {
                    $scope.selectbrandIdentity = false;
                    $scope.formData.brandIdentity = "";
                    _.each($scope.formData.finishingUpArr, function(n) {
                        $scope.formData.brandIdentity += n + ",";
                    });
                      $scope.formData.brandIdentity = $scope.formData.brandIdentity.substring(0, ($scope.formData.brandIdentity.length - 1));
                } else {
                    $scope.selectbrandIdentity = true;
                };




            if ($scope.formData.brandBriefArr.length > 0 && $scope.formData.personalityBrandArr.length > 0 && $scope.formData.customerResArr.length > 0 && $scope.formData.brandLogosArr.length > 0 && $scope.formData.brandFontsArr.length > 0 && $scope.formData.finishingUpArr.length > 0) {
                NavigationService.saveBrandingBrief(formData, function(data) {
                    console.log("formData", formData);
                    console.log("data", data);
                    if (data.value === true) {
                        $scope.formComplete = true
                        $timeout(function() {
                            $scope.formComplete = false;
                            $scope.formData = {};
                            $scope.formData.brandBriefArr = [];
                            $scope.formData.personalityBrandArr = [];
                            $scope.formData.customerResArr = [];
                            $scope.formData.brandLogosArr = [];
                            $scope.formData.finishingUpArr = [];
                            $scope.formData.brandFontsArr = [];
                            $scope.formData.accomplish = "";
                            $scope.formData.characteristics = "";
                            $scope.formData.interactionBrand = "";
                            $scope.formData.logoType = "";
                            $scope.formData.brandFont = "";
                            $scope.formData.brandIdentity = "";

                        }, 2000);
                    }
                });

            }



        }



        $scope.brandBreifFunction = function(val) {
            var foundIndex = _.findIndex($scope.formData.brandBriefArr, function(key) {
                return key === val;
            });
            if (foundIndex === -1) {
                $scope.formData.brandBriefArr.push(val);
            } else {
                $scope.formData.brandBriefArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.brandBriefArr);
        };
        $scope.brandChracteristics = function(val) {
            var foundIndex = _.findIndex($scope.formData.personalityBrandArr, function(key) {
                return key === val;
            })
            if (foundIndex === -1) {
                $scope.formData.personalityBrandArr.push(val);
            } else {
                $scope.formData.personalityBrandArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.personalityBrandArr);
        };
        $scope.customerRes = function(val) {

            var foundIndex = _.findIndex($scope.formData.customerResArr, function(key) {
                return key === val;
            });
            if (foundIndex === -1) {
                $scope.formData.customerResArr.push(val);
            } else {
                $scope.formData.customerResArr.splice(foundIndex, 1);
            }
            console.log($scope.formData.customerResArr);

        };
        $scope.brandLogo = function(val) {
            var foundIndex = _.findIndex($scope.formData.brandLogosArr, function(key) {
                return key === val;
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
                return key === val;
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

        $scope.submitWebForm = function(formData) {


            if (formData.myothercontent != '' && formData.myothercontent) {
                $scope.contentType(formData.myothercontent);
              }
                if ($scope.formData.contentTypeArr.length > 0) {
                    $scope.selectContentType = false;
                    $scope.formData.contentType = " ";
                    _.each($scope.formData.contentTypeArr, function(n) {
                        $scope.formData.contentType += n + ",";
                    });
                    $scope.formData.contentType = $scope.formData.contentType.substring(0, ($scope.formData.contentType.length - 1));


                } else {
                    $scope.selectContentType = true;
                }


            if (formData.requirement.myother != '' && formData.requirement.myother) {
                $scope.webAppRequirements(formData.requirement.myother);
            }

            if ($scope.formData.requirementsArr.length > 0) {
                $scope.selectrequirements = false;
                $scope.formData.requirements="";
                _.each($scope.formData.requirementsArr, function(n) {
                    $scope.formData.requirements += n + ",";
                });
                  $scope.formData.requirements = $scope.formData.requirements.substring(0, ($scope.formData.requirements.length - 1));
            } else {
                $scope.selectrequirements = true;
            }
            if (formData.features.myotherFeature != '' && formData.features.myotherFeature) {
                $scope.websiteFeatures(formData.features.myotherFeature);
            }

            if ($scope.formData.websiteFeaturesArr.length > 0) {
                $scope.selectwebsiteFeatures = false;
                $scope.formData.websiteFeatures="";
                _.each($scope.formData.websiteFeaturesArr, function(n) {
                    $scope.formData.websiteFeatures += n + ",";
                });
                  $scope.formData.websiteFeatures = $scope.formData.websiteFeatures.substring(0, ($scope.formData.websiteFeatures.length - 1));

            } else {
                $scope.selectwebsiteFeatures = true;
            }


            if ($scope.formData.contentTypeArr.length > 0 && $scope.formData.requirementsArr.length > 0 && $scope.formData.websiteFeaturesArr.length > 0 ) {
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
                          $scope.formData.contentType = "";
                          $scope.formData.requirements = "";
                          $scope.formData.websiteFeatures = "";


                      }, 2000);
                  }
              })
            }



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
