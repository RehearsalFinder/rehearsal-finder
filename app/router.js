import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this;
  this.route('login');
  this.route('register');

  this.route('rehearsalspaces', function () {
    this.route('detail', { path: '/:id' });
  });

  this.route('user-dashboard', function () {
    this.route('edit');
  });

  this.route('admin', function () {
    this.route('new');
    this.route('edit', { path: '/:id' }, function() {
      this.route('availabilities');
      this.route('delete');
      this.route('edit');
    });
  });
});

export default Router;
