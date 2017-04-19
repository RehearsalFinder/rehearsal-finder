import Ember from 'ember';
const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: service('current-user'),

  actions: {
    async createAvail(changeset) {
      // applies
      await changeset.save();

      const availabilities = this.store.createRecord('availabilities', this.model);

      availabilities.set('space', this.space);

      await availabilities.save();

      this.transitionToRoute('index');
    }
  }
});
