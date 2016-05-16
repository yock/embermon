export function initialize(appInstance) {
  const container = appInstance.lookup ? appInstance : appInstance.container;
  const store = container.lookup('service:store');
  store.findAll('trainee');
}

export default {
  after: 'ember-data',
  name: 'load-gym',
  initialize
};
