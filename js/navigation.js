var adminurl = "http://yfl.wohlig.co.in/api/";
// var adminurl = "http://192.168.2.12/api/";

if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            anchor: "home"
        }]
    }, {
        name: "Form",
        classis: "active",
        anchor: "form",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        websiteReq: function(formData, callback) {

            $http({
                url: adminurl + 'website/save',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        saveBrandingBrief: function(formData, callback) {

            $http({
                url: adminurl + 'branding/save',
                method: 'POST',
                data: formData
            }).success(callback);
        },

    };
});
