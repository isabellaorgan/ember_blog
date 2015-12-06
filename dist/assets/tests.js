define('peep-blog-frontend/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('peep-blog-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'peep-blog-frontend/tests/helpers/start-app', 'peep-blog-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _peepBlogFrontendTestsHelpersStartApp, _peepBlogFrontendTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _peepBlogFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _peepBlogFrontendTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('peep-blog-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/helpers/resolver', ['exports', 'ember/resolver', 'peep-blog-frontend/config/environment'], function (exports, _emberResolver, _peepBlogFrontendConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _peepBlogFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _peepBlogFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('peep-blog-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/helpers/start-app', ['exports', 'ember', 'peep-blog-frontend/app', 'peep-blog-frontend/config/environment'], function (exports, _ember, _peepBlogFrontendApp, _peepBlogFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _peepBlogFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _peepBlogFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('peep-blog-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post.js should pass jshint', function (assert) {
    assert.ok(true, 'models/post.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/routes/posts/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/index.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/posts/index.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/routes/posts/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/new.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/posts/new.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/routes/posts/post/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts/post');
  QUnit.test('routes/posts/post/edit.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/posts/post/edit.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/routes/posts/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/post.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/posts/post.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/routes/posts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/posts.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/posts.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/test-helper', ['exports', 'peep-blog-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _peepBlogFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_peepBlogFrontendTestsHelpersResolver['default']);
});
define('peep-blog-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('peep-blog-frontend/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('peep-blog-frontend/tests/unit/routes/posts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('peep-blog-frontend/tests/unit/routes/posts-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/posts-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/posts-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('peep-blog-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map