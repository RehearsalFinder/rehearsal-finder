import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  'first-name': DS.attr('string'),
  'last-name': DS.attr('string'),
});
