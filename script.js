function getInfo() {
  var firstName_input = document.getElementById("firstName_input").value;
  var lastName_input = document.getElementById("lastName_input").value;
  var email_input = document.getElementById("email_input").value;
  var phoneNumber_input = document.getElementById("phoneNumber_input").value;
  var age_input = document.getElementById("age_input").value;
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phoneNumber");
  const age = document.getElementById("age");
  const thankYouMessage = document.getElementById("thankYouMessage_output");
  fullName.innerHTML = "Your name: "+firstName_input+" "+lastName_input;
  email.innerHTML = "Your email: "+email_input;
  phoneNumber.innerHTML = "Your phone number: "+phoneNumber_input;
  age.innerHTML = "Your age: "+age_input;
  thankYouMessage.innerHTML = "We appreciate all your info, thank you!"
}
