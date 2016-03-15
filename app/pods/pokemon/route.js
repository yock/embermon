import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('pokemon');
  },

  afterModel(pokemon) {
    pokemon.forEach((p) => {
      this.store.findRecord('pokemon', p.id);
    });
    return null;
  }
});
