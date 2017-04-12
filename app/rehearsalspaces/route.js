import Ember from 'ember';
import spaces from '../data';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('space');
  }
});
