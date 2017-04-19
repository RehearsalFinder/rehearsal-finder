import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  claimedBy: DS.attr('string'), // claimed by a user or null
  space: DS.belongsTo('space'),
});
