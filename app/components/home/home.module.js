import stateConfig from './home.states.js';
import HomeController from './home.controller.js'
require('./home.scss');

let homeModule = angular.module('app.home', [])
  .config( stateConfig )
  .controller( 'HomeController', HomeController );

export default homeModule = homeModule.name;
