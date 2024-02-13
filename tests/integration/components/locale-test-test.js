import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-flatpickbug/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | locale-test', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LocaleTest />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <LocaleTest>
        template block text
      </LocaleTest>
    `);

    assert.dom().hasText('template block text');
  });
});
