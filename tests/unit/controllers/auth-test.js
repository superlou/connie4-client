import { module, test } from 'qunit';
import { setupTest } from 'connie-client/tests/helpers';

module('Unit | Controller | auth', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:auth');
    assert.ok(controller);
  });
});
