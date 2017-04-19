import Ember from 'ember';
const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: service('current-user'),

  actions: {
    async createAvail(changeset) {
      await changeset.save();

      const availability = this.store.createRecord('availabilities', this.model);

      availability.set('space', this.model);

      await availability.save();

      this.transitionToRoute('admin.index');
    }
  }
});
