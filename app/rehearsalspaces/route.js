import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'That 70s House',
        area: 'Belmont',
        city: 'Nashville',
        state: 'TN',
        costPerHour: '15'
      },
      {
        id: 2,
        name: 'Awesome Band Spot',
        area: 'Hip Area',
        city: 'Nashville',
        state: 'TN',
        costPerHour: '100'
      },
      {
        id: 3,
        name: 'Diamond Sound',
        area: 'Metro Center',
        city: 'Nashville',
        state: 'TN',
        costPerHour: '30'
      }
    ];
  }
});
