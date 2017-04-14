import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    updateProfile() {
      this.transitionToRoute('user-dashboard.index');
    }
  },
});
