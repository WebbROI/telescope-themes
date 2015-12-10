Package.describe({
  name: 'webbroi:telescope-theme-iris',
  version: '0.3.1',
  summary: 'Telescope Iris theme package inpired by Crater.io.',
  git: 'https://github.com/WebbROI/telescope-themes.git'
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    // core dependencies
    'telescope:core@0.24.0',
    'telescope:theme-base@0.24.0',
    'telescope:theme-hubble@0.24.0',
    'telescope:tags@0.24.0',
    'telescope:notifications@0.24.0'
  ]);

  api.use([
    // bootstrap 3
    'twbs:bootstrap@3.3.4'
    ], ['client']
  );

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);  

  api.addFiles([
    'lib/iris_colors.js'
  ], ['client', 'server']);

  api.addFiles(
    [
    // template overrides
    'lib/client/templates/iris_layout.html',
    'lib/client/templates/iris_main_header.html',
    'lib/client/templates/iris_main_header.js',
    'lib/client/templates/iris_sub_header.html',
    'lib/client/templates/iris_categories_menu.html',
    'lib/client/templates/iris_side_nav.html',
    'lib/client/templates/iris_side_nav.js',
    'lib/client/templates/iris_bottom_nav.html',
    'lib/client/templates/iris_tabs.html',
    'lib/client/templates/iris_tabs.js',
    'lib/client/templates/iris_header.html',
    'lib/client/templates/iris_user_menu.html',
    'lib/client/templates/iris_notifications_menu.html',
    'lib/client/templates/iris_post_avatars.html',
    'lib/client/templates/iris_post_body.html',
    'lib/client/templates/iris_post_body.js',
    'lib/client/templates/iris_submit_button.html',
    'lib/client/templates/iris_footer_code.html',
    'lib/client/templates/iris_views_menu.html',
    'lib/client/templates/iris_views_menu.js',

    // custom styles                  
    'lib/client/stylesheets/screen.css',

    // customizations    
    'lib/client/custom_templates.js',
    'lib/client/iris_menus.js'

    ], ['client']
  );  

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
