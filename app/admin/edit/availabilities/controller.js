import Ember from 'ember';
const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: service('current-user'),

  actions: {
    async createAvail(changeset) {
      await changeset.save();

      const availability = this.store.createRecord('availability', this.model);

      availability.set('space', this.space);

      await availability.save();

      this.transitionToRoute('admin.edit');
    },


  }
});
