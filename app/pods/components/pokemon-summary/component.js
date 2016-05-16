import Ember from 'ember';

export default Ember.Component.extend({
  inGym: Ember.computed.alias('pokemon.inGym'),
  actions: {
    click() {
      this.sendAction('click', this.get('pokemon'));
    }
  }
});
