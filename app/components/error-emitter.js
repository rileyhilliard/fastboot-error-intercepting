import Component from '@ember/component';

function _throwErrorOnInit() {
  console.log('blown up serverside', document.thisIsNotAThing);
}

export default Component.extend({
  init() {
    this._super(...arguments);
    const throwAsync = false;

    if (throwAsync) {
      setTimeout(_throwErrorOnInit, 0);
    } else {
      _throwErrorOnInit();
    }
  }
});
