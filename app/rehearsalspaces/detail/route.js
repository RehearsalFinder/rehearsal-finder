import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('rehearsalspaces.detail').id;

    return this.store.findRecord('space', id);
  }
});
