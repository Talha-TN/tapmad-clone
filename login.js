function validateForm(){
    let x= document.forms["form"] ["email"].value;
    let y= document.forms["form"] ["password"].value;
    if (x=='' || y==''){
        alert("Email and Password must be fill out")
        return false;
       
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