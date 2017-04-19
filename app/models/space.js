import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  streetAddress: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  costPerHour: DS.attr('string'),
  squareFeet: DS.attr('string'),
  amenities: DS.attr('csv'),
  availableEquipment: DS.attr('csv'),
  spaceHostName: DS.attr('string'),
  hostEmail: DS.attr('string'),
  hostPhone: DS.attr('string'),
  featured: DS.attr('string'),
  description: DS.attr('string'),
  rules: DS.attr('string'),
  coordinates: DS.attr('string'),
});
