import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('space', this.modelFor('admin.edit'));
  }
});
