'use strict';

var app = angular.module('wichtel');

app.controller("wichtelController", function ($scope, $http, $log, NOTIFICATIONS) {
    var sender = {};
    var wichtelEmails = [
        {
            name: '',
            email: ''
        }
    ];
    var wichtelNames = wichtelEmails;

    $scope.animation = {};
    $scope.wichtels = wichtelEmails;
    $scope.sender = sender;
    $scope.NOTIFICATIONS = NOTIFICATIONS;

    $scope.wichtelExpress = function (isValid) {
        $scope.error = false;
        $scope.submitted = false;
        $scope.success = false;

        $scope.enoughWichtels = (wichtelEmails.length > 1);
        $scope.notEnoughWichtels = (wichtelEmails.length <= 1);

        var wichtels = [];
        wichtels[0] = wichtelNames;
        wichtels[1] = wichtelNames;
        wichtels[2] = sender;

        $scope.submitted = true;
        $scope.sent = (isValid && $scope.enoughWichtels );
        if ($scope.sent) $scope.notEnoughWichtels = false;

        if (isValid && $scope.enoughWichtels) {
            $http.post("sendWichtel.php", wichtels)
                .success(function (response) {
                    $scope.sent = false;
                    $scope.success = true;

                }).error(function (data, status, headers, config) {
                    $scope.sent = false;
                    $scope.error = true;
                    $log.error(status);
                    $log.error(data);
                });
        }
    };

    $scope.addWichtel = function () {
        $scope.animation.fadeIn = true;
        $scope.animation.fadeOut = false;

        wichtelEmails.push({name: '', email: ''});
    };

    $scope.removeWichtel = function (index) {
        $scope.animation.fadeOut = true;
        $scope.animation.fadeIn = false;

        if (wichtelEmails.length > 1) {
            wichtelEmails.splice(index, 1);
        }
    };
});
