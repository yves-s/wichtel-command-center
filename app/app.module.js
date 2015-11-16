// Import angular
import 'angular';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Animation
import angularAnimate from 'angular-animate';
// Material Design lib
import angularMaterial from 'angular-material';
// Router
import angularUIRouter from 'angular-ui-router';

// Our services
// import appServices from './services/services.js';
// Our modules
import main from './components/home/home.module.js';

const APP_MODULES = [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    main
];

// Create our app module
function register() {

  angular.module('app', APP_MODULES)

}

export { register };
