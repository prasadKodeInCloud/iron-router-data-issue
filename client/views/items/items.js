/* ---------------------------------------------------- +/

## Items ##

Code related to the items template

/+ ---------------------------------------------------- */

Template.items.created = function () {
  //
};

Template.items.helpers({
  items: function(){
    return Items.find();
  },

});

Template.items.rendered = function () {
  //
};

Template.items.events({
  //
});