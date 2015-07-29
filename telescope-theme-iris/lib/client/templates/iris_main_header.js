Template.iris_main_header.helpers({
  showTaglineBanner: function () {
    return !!Settings.get('tagline') && !!Settings.get('showTaglineBanner');
  }
});