import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('space');
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('formValues', {});
  }
});
