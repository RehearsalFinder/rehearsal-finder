import Ember from 'ember';

export default Ember.Controller.extend({
  forms: {},

  actions: {
    createNewSpace() {
      const space = this.store.createRecord('space', this.forms);

      space.save().then(() => {
        this.set('forms', {});
      });
    }
  }

});
