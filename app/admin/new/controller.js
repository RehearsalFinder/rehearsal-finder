import Ember from 'ember';
const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: service('current-user'),

  actions: {
    async createNewSpace(changeset) {
      await changeset.save();

      const space = this.store.createRecord('space', this.model);

      await space.save();

      this.transitionToRoute('admin.index');
    }
  }
});
