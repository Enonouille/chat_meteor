Messages = new Mongo.Collection("messages");

Messages.insert({text: "hello"}, function() {
  console.log('insert');
});

Messages.insert({text: "ploip"}, function() {
  console.log('insert');
});