import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './room.html';

Template.messages.helpers({
  messages: [
    {text: "All these messages"},
    {text: "Uses the same template"},
    {text: "But have a different data context"},
    {text: "It's why these messages are all different!"},
    {text: "Hello man"}
  ]
});

Template.footer.events({
  'keypress input': function(e) {
    if (event.charCode == 13) {
      const valueMessage = $('.input-box_text').val();

      e.preventDefault();
      $('.message-history').append(`<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">Renan</a><span class="message_timestamp">11:23 am</span><span class="message_star">Hello</span><span class="message_content">${valueMessage}</span></div>`);
      $('.input-box_text').val('');
    } 
  }
});