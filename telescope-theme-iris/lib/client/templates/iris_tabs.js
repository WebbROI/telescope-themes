Template.iris_tabs.helpers({
	getMenuIcon: function () {
    return typeof this.item.menuIcon === "function" ? this.item.menuIcon() :  this.item.menuIcon;
  }
});