import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://pokeapi.co',
  namespace: 'api/v2'
});
