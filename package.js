Package.describe({
  name: 'challett:toast',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'This is a wrapper package for the toast css framework.  It adds a basic grid system to your project.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/challett/meteor-toast.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('fourseven:scss@3.4.1');
  api.addFiles('_grid.scss');
  api.addFiles('toast.css');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('challett:toast');
  api.addFiles('toast-tests.js');
});
