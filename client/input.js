Template.footer.events({
  'keypress input': function(e) {
    const inputVal = $('.input-box_text').val();
    if(!!inputVal) {
      const charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      if (charCode == 13) {
        e.stopPropagation();
        Messages.insert({text: $('.input-box_text').val()});
        $('.input-box_text').val('');
        return false;
      }    
    }
  }
});