import DS from 'ember-data';
import Ember from 'ember';

const inflector = Ember.Inflector.inflector;
inflector.irregular('pokemon', 'pokemon');

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: Ember.computed('id', function() {
    return `https://pokeapi.co/media/sprites/pokemon/${this.get('id')}.png`;
  })
});
