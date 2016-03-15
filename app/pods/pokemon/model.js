import DS from 'ember-data';
import Ember from 'ember';

const inflector = Ember.Inflector.inflector;
inflector.irregular('pokemon', 'pokemon');

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string', { defaultValue: '/images/pokeball.svg' })
});
