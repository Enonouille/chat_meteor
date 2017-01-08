Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});


Template.registerHelper('usernameFromId', function (userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === 'undefined') {
    return 'Anonymous';
  }
  if (typeof user.services.facebook !== 'undefined') {
    return user.services.facebook.first_name;
  }
  if (typeof user.services.google !== 'undefined') {
    return user.services.google.given_name;
  }  
  if (typeof user.services.twitter !== 'undefined') {
    return user.profile.name;
  }
  return user.username;
});



Template.registerHelper('dateFormat', (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const min = date.getMinutes();

  return `${hours}:${min}`;
})