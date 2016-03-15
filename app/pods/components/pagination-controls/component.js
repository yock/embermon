import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    next() {
      this.get('next')();
    },
    prev() {
      this.get('prev')();
    }
  }
});
