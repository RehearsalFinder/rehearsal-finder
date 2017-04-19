import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deleteSpace() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute('admin.index');
      });
    }
  }

});
