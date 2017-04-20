import Ember from 'ember';

export default Ember.Controller.extend({
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
