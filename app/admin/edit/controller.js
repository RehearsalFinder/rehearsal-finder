import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    updateSpace() {
      const space = this.model;
      space.save().then(() => {
        this.set('forms', {});
        this.transitionToRoute('admin.index');
      });
    },

    deleteSpace() {
      const space = this.model.destroyRecord().then(() => {
        this.transitionToRoute('admin.index');
      });
    }
  }

});