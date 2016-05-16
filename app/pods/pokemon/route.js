import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('pokemon', params);
  },

  actions: {
    toggleGym(pokemon) {
      if(pokemon.get('inGym')) {
        Ember.debug(`Removing ${pokemon.get('name')} from your gym.`);
        this.get('store').find('trainee', pokemon.get('id')).then(trainee => {
          trainee.destroyRecord();
        });
      } else {
        Ember.debug(`Adding ${pokemon.get('name')} to your gym.`);
        const trainee = this.get('store').createRecord('trainee', { id: pokemon.get('id'), pokemon: pokemon });
        trainee.save();
      }
    }
  }
});
