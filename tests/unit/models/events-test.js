import { setupTest } from 'connie-client/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | events', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('events', {});
    assert.ok(model, 'model exists');
  });
});
