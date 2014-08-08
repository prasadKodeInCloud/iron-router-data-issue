Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  },
  myNum: function () {
    return Math.random();
  },
})

Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  }
})