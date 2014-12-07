'use strict';

var app = angular.module('wichtel');

app.constant('NOTIFICATIONS', {
    success: 'email has been successfully sent',
    sent: 'Sending in progress',
    error: 'An Error Occured',
    warning: 'Add at least 2 Wichtels'
});