import Ember from 'ember';
const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),
  currentUser: service('current-user'),
  selectedFiles: [],


  actions: {
    async createNewSpace(changeset) {
      await changeset.save();

      const fetch = this.get('filesystem.fetch');
      const token = this.get('session.session.content.authenticated.token');

      fetch('http://localhost:8080/spaces/upload', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${token}`
        },
        body: {
          photo: this.model.spaceImg[0],
          name: this.model.name,
          city: this.model.city,
          state: this.model.state,
          'street-address': this.model.streetAddress,
          zip: this.model.zip,
          'cost-per-hour': this.model.costPerHour,
          'square-feet': this.model.squareFeet,
          amenities: this.model.amenities,
          'available-equipment': this.model.availableEquipment,
          'space-host-name': this.model.spaceHostName,
          'host-email': this.model.hostEmail,
          'host-phone': this.model.hostPhone,
          featured: this.model.featured,
          description: this.model.description,
          rules: this.model.rules
        }
      }).then(res => res.json())
        .then((data) => {
          this.store.pushPayload(data);
          this.transitionToRoute('admin.index');
        });
    }
  }
});
