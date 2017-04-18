import DS from 'ember-data';
import config from 'rehearsal-finder/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  host: config.DS.host,

  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;

      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  }
});
