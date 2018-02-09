var firstName = prompt("Hi there! What's your first name?") || "Visity";
var lastName = prompt("What's your last name?") || "McVisitFace";
var output = document.querySelector('#greeting');

output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + "!</p>";
