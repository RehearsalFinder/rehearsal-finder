import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('rehearsalspaces.detail').id;

    return this.store.findRecord('space', id);
  },

  photoDefault: 'https://static.pexels.com/photos/300333/pexels-photo-300333.jpeg',

});
