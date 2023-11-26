const onSubmit = (event) => {
  event.preventDefault();
  var email_id = email.value;
  const isValidEmail = ValidateEmail(email_id);
  console.log(email_id);
  if (isValidEmail) {
    window.open("success.html?email=" + email_id, "_self");
  } else {
    email.classList.add("error_input");
    error.classList.add("error_field");
  }
};

const clear_error = () => {
  email.classList.remove("error_input");
  error.classList.remove("error_field");
};

function ValidateEmail(email_id) {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email_id.match(validRegex)) {
    return true;
  }
  return false;
}

const show_email = () => {
  const email = window.location.href.split("?")[1].split("=")[1];
  console.log(email);
  success_email.innerHTML = email;
};

function dismiss() {
  window.open("index.html", "_self");
}
