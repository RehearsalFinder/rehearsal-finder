import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
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
    logout() {
      this.get('session').invalidate();
      this.transitionToRoute('index');
    }
  }
});
