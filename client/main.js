import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './room.html';

Template.messages.helpers({
  messages: Messages.find({})
});


console.log(Messages.find().fetch());
console.log(Messages.find({}));


Template.footer.events({
  'click .footer__box_btn': function(e) {
      const valueMessage = $('.input-box_text').val();

//      e.preventDefault();
      e.stopPropagation();
      Messages.insert({text: valueMessage}, function() {
        console.log('insert');
      });
      
      console.log(Messages.find().fetch());
      
      $('.message-history').append(`<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">Renan</a><span class="message_timestamp">11:23 am</span><span class="message_star">Hello</span><span class="message_content">${valueMessage}</span></div>`);
      $('.input-box_text').val('');
      return false;
  }
});
