Posts.getRoute = function () {
  FlowRouter.watchPathChange()
  var viewName = this.name;
  var currentQuery = _.clone(FlowRouter.current().queryParams);
  var defaultView = Settings.get("defaultView", "top");
  var newQuery;

  if (viewName === defaultView) {
    // for the default view, just remove the "view" parameter altogether
    delete currentQuery.view;
    newQuery = currentQuery;
  } else {
    newQuery = _.extend(currentQuery, {view: viewName});
  }
  
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);
};

Telescope.menuItems.removeAll("viewsMenu");

var irisViewsMenuItems = [
  {     
    route: Posts.getRoute,
    name: 'top',
    label: 'trending',
    menuIcon: 'fa-line-chart'
  },
  {
  	route: Posts.getRoute,
    name: 'new',
    label: 'recent',
    menuIcon: 'fa-clock-o'
  },  
  {
  	route: Posts.getRoute,
    name: 'best',
    label: 'best',
    menuIcon: 'fa-star'
  },
  {
    route: Posts.getRoute,
    name: 'daily',
    label: 'daily',
    menuIcon: 'fa-calendar-o',
    viewTemplate: 'posts_daily'
  },
  {
  	route: Posts.getRoute,
    name: 'pending',
    label: 'pending',
    menuIcon: 'fa-inbox',
    adminOnly: true
  },
  {
    route: Posts.getRoute,
    name: 'rejected',
    label: 'rejected',
    menuIcon: 'fa-thumbs-down',
    adminOnly: true
  },
  {
  	route: Posts.getRoute,
    name: 'scheduled',
    label: 'scheduled',
    menuIcon: 'fa-calendar',
    adminOnly: true
  }
];

Telescope.menuItems.add("viewsMenu", irisViewsMenuItems);