<<<<<<< HEAD

$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});
=======
function validateForm(){
  var nameRegex = /^[A-Za-z]+$/;
  var fnameVal = $('#fname').val();
  if(nameRegex.test(fnameVal)){
    $('#fname').css('border', '1px solid green');
  }else{
    $('#fname').css('border', '1px solid red');
    return false
  }
  
  var lnameVal = $('#lname').val();
    if(nameRegex.test(lnameVal)){
    $('#lname').css('border', '1px solid green');
  }else{
    $('#lname').css('border', '1px solid red');
    return false
  }
  
  var mailRegex = /^[a-z0-9]\w+\.?\w*@[a-z]+\.[a-z]{2,8}$/;
  var mailVal = $('#mail').val();
      if(mailRegex.test(mailVal)){
    $('#mail').css('border', '1px solid green');
  }else{
    $('#mail').css('border', '1px solid red');
    return false
  }
  
}
>>>>>>> add contact form not responsible
