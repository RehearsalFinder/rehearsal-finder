import Ember from 'ember';
import spaces from '../data';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('space');
  },

  // actions: {
  //   error(err) {
  //     this.replaceWith('user-dashboard');
  //   }
  // }
});
