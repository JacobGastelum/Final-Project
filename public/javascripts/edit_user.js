$(() => $("#updateButton").click(updateUser));

function btnClickHandler() {
  $('lorem').toggle()
}

function movehandler(e) {
  $(coords).html('Coords X: ' + e.clientX + 'Y: ' +e.clientY)
}

function onInputFocus(e) {
  $(this).css('background', 'pink')
}

function onInputBlur(e) {
  $(e.target).css('background', 'white')
}

function updateUser() {
  const url = window.location.pathname;
  const userId = url.substring(url.lastIndexOf("/") + 1);
  console.log(userId);
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

  const request = $.ajax({
    type: "put",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(data => console.log(data));
  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}