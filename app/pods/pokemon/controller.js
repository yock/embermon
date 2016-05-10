import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['offset'],
  offset: 0,

  actions: {
    next() {
      this.set('offset', this.get('model.meta.next'));
    },
    prev() {
      this.set('offset', this.get('model.meta.prev'));
    }
  }
});
