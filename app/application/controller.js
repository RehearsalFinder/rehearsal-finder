import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  actions: {
    toggleLoginModal() {
      this.toggleProperty('isShowingLoginModal');
    },
    toggleSignUpModal() {
      this.toggleProperty('isShowingSignupModal');
    },
    async loginUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Make better decisions with this form');
      }

      await changeset.save();

      await this.get('session').authenticate('authenticator:token', {
        identification: this.get('model.email'),
        password: this.get('model.password'),
      });
    },
  }
});
