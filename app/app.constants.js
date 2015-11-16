// import localConfig from './app.local.js';

let constants = {
    MESSAGES: {
        SUCCESS: 'Email has been successfully sent',
        SENT: 'Sending in progress',
        ERROR: 'An Error Occured',
        WARNING: 'Add at least 2 Wichtels'
    }
};

function register() {

  angular.forEach( constants, function registerConstant( value, key ) {

    angular
      .module( 'app' )
      .constant( key, value );

  });

}

export { register };
