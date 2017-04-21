import Ember from 'ember';

export default Ember.Controller.extend({
  photoDefault: 'https://static.pexels.com/photos/300333/pexels-photo-300333.jpeg',
  session: Ember.inject.service('session'),
  formValues: {
    date: ''
  },

  actions: {
    toggleAvail() {
      // toggle class of time button
    },
  }
});
