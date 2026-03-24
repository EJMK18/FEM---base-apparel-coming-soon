"use script";

const form = document.querySelector("form");
const input = document.querySelector("input");
const submitBtn = document.querySelector("button");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (input.checkValidity()) {
    input.classList.remove("error");
    form.submit();
    errorMessage.style.display = "none";
  } else {
    input.classList.add("error");
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please provide a valid email";
  }
});
