// function validatePasswords() {
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmpassword").value;

//     if (password !== confirmPassword) {
//       alert("Passwords do not match. Please re-enter.");
//       return false; // Prevent form submission
//     }
//   }
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("form");
  form.addEventListener("submit", validatePasswords);
});

function validatePasswords(event) {
  event.preventDefault(); // Prevent form submission

  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmpassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter.");
  } else {
    // Passwords match, open the target HTML page
    window.location.href = "login.html";
  }
}

  function showSpan(element) {
    var hiddenSpan = element.querySelector('.hidden');
    hiddenSpan.style.display = "inline"; // Show the hidden span
  }

  function hideSpan(element) {
    var hiddenSpan = element.querySelector('.hidden');
    hiddenSpan.style.display = "none"; // Hide the span when not hovering over it
  }

  document.addEventListener("DOMContentLoaded", function() {
    var hiddenSpan = document.querySelector('.hidden');
    hiddenSpan.style.display = "none"; // Hide the hidden span by default
  });