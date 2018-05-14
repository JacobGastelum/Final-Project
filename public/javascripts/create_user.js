$(() => $("#createButton").click(createUser));

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

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}