Meteor.startup(function () {
  smtp = {
    username: 'chat meteor',
    password: 'Nd2GDahlFML7FAdOKCQALA',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});