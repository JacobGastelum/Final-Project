$(() => $("#createButton").click(createUser));

function onInputFocus(e) {
  $(this).css('background', 'pink')
}

function createUser() {
  const paymentVal = $("input[name=payment]")
    .val()
    .trim();
  const payment = parseInt(paymentVal, 10);
  
  const phoneNumberVal = $("input[name=phoneNumber]")
    .val()
    .trim();
  const phoneNumber = parseInt(phoneNumberVal, 10);

  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    organization: $("input[name=organization]")
      .val()
      .trim(),
    payment,
    phoneNumber
  };
    if (user.name.length == 0){
        alert('You must enter a name');
        return false;
    }
    return true;
}

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  const requestindex = $.ajax({url: "https://shielded-journey-79042.herokuapp.com/users", type: "get" });
  setTimeout ("window.location.replace('https://shielded-journey-79042.herokuapp.com/users');", 1500);

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
