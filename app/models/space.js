import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  costPerHour: DS.attr('string'),
  squareFeet: DS.attr('string'),
  // amenities: DS.attr('string'), hasMany
  // availableEquipment: DS.attr('string'), hasMany
  spaceHostName: DS.attr('string'),
  hostEmail: DS.attr('string'),
  hostPhone: DS.attr('string'),
  featured: DS.attr('boolean'),
  description: DS.attr('string'),
  rules: DS.attr('string'),
});
