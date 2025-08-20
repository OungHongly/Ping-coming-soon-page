const form = document.querySelector(".email-form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".message");

const showError = function (message) {
  emailInput.classList.add("error");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
};
const emialValidate = function () {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    showError("Whoops! It looks like you forgot to add your email");
    return false;
  }
  if (!regex.test(emailInput.value.trim())) {
    showError("Please provide a valid email address");
    return false;
  } else {
    emailInput.classList.remove("error");
    errorMessage.classList.add("hidden");
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValid = emialValidate();
  if (emailValid) {
    form.submit();
  }
});
