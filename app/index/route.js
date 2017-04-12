import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('space');
  },

  // actions: {
  //   error(err, transition) {
  //     this.replaceWith('user-dashboard');
  //   }
  // }
});
