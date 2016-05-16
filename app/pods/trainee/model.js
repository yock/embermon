import DS from 'ember-data';

export default DS.Model.extend({
  pokemon: DS.belongsTo('pokemon')
});
