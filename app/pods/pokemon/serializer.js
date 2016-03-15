import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload) {
    payload.imageUrl = payload.sprites.front_default;
    const newPayload = {
      pokemon: payload
    };
    return this._super(store, primaryModelClass, newPayload);
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      pokemon: payload.results,
      meta: this._extractMeta(payload)
    };
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  extractId(modelClass, resourceHash) {
    if(resourceHash.id === undefined) {
      const parser = document.createElement('a');
      parser.href = resourceHash.url;
      const segments = parser.pathname.split('/');
      resourceHash.id = segments.filter((segment) => {
        return segment !== '';
      }).pop();
    }
    return this._super(...arguments);
  },

  _extractMeta(payload) {
    return {
      count: payload.count,
      next: payload.next,
      prev: payload.previous
    };
  }
});
