'use strict';

class HomeController {
    constructor($scope, $http, $log, MESSAGES) {
        'ngInject';

        this.$scope = $scope;
        this.$http = $http;
        this.$log = $log;
        this.MESSAGES = MESSAGES;

        this.sender = {};
        this.wichtelEmails = [
            {
                name: '',
                email: ''
            }
        ];
        this.wichtelNames = this.wichtelEmails;

        this.$scope.animation = {};
        this.$scope.wichtels = this.wichtelEmails;
        this.$scope.sender = this.sender;
        this.$scope.MESSAGES = this.MESSAGES;
    }

    wichtelExpress(isValid) {
        this.$scope.error = false;
        this.$scope.submitted = false;
        this.$scope.success = false;

        this.$scope.enoughWichtels = (this.wichtelEmails.length > 1);
        this.$scope.notEnoughWichtels = (this.wichtelEmails.length <= 1);

        var wichtels = [];
        wichtels[0] = this.wichtelNames;
        wichtels[1] = this.wichtelNames;
        wichtels[2] = this.sender;

        this.$scope.submitted = true;
        this.$scope.sent = (isValid && this.$scope.enoughWichtels );
        if (this.$scope.sent) this.$scope.notEnoughWichtels = false;

        if (isValid && this.$scope.enoughWichtels) {
            this.$http.post("sendWichtel.php", wichtels)
                .success(function (response) {
                    this.$scope.sent = false;
                    this.$scope.success = true;

                }).error(function (data, status, headers, config) {
                    this.$scope.sent = false;
                    this.$scope.error = true;
                    this.$log.error(status);
                    this.$log.error(data);
                });
        }
    }

    addWichtel() {
        this.$scope.animation.fadeIn = true;
        this.$scope.animation.fadeOut = false;

        this.wichtelEmails.push({name: '', email: ''});
    }

    removeWichtel(index) {
        this.$scope.animation.fadeOut = true;
        this.$scope.animation.fadeIn = false;

        if (this.wichtelEmails.length > 1) {
            this.wichtelEmails.splice(index, 1);
        }
    }
}

export default HomeController;
