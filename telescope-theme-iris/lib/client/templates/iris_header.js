Template.iris_header.helpers({
  showTaglineBanner: function () {
    return !!Settings.get('tagline') && !!Settings.get('showTaglineBanner');
  }
});