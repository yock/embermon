import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('pokemon', params);
  },

  afterModel(pokemon) {
    pokemon.forEach((p) => {
      this.store.findRecord('pokemon', p.id);
    });
    return null;
  }
});
