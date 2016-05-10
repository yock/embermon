import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('pokemon', params);
  }
});
