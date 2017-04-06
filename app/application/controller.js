import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  actions: {
    toggleLoginModal() {
      this.toggleProperty('isShowingLoginModal');
    },
    toggleSignUpModal() {
      this.toggleProperty('isShowingSignupModal');
    }
  }
});
