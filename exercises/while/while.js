// Exercise 1
var outputTarget = document.querySelector(".ex-1");
var outputHTML = "<ul>";
var n = 1;

while (n < 11) {
  console.log(n);
  outputHTML += "<li>" + n + "</li>";
  n++;
}

outputHTML += "</ul>";
outputTarget.innerHTML = outputHTML;

// Exercise 2
var outputTarget = document.querySelector(".ex-2");
var outputHTML = "<ul>";
var n = 2;

while (n < 21) {
  console.log(n);
  outputHTML += "<li>" + n + "</li>";
  n += 2;
}

outputHTML += "</ul>";
outputTarget.innerHTML = outputHTML;

// Exercise 3
var outputTarget = document.querySelector(".ex-3");
var outputHTML = "<ul>";
var n = 10;
var runTot = 0;
var i = 1;

while (i <= n) {
  runTot += i;
  console.log(runTot);
  outputHTML += "<li>" + runTot + "</li>";
  i++;
}

outputHTML += "</ul>";
outputTarget.innerHTML = outputHTML;

//Exercise 5
var outputTarget = document.querySelector(".ex-5");
var outputHTML = "<ul>";
var n = 15;
var numDescr = "";

while (n > 0) {
  if (n % 2 === 0) {
    numDescr = "even";
  }
  else {
    numDescr = "odd";
  }
  console.log(n + ": " + numDescr);
  outputHTML += "<li>" + n + ": " + numDescr + "</li>";
  n--;
}

outputHTML += "</ul>";
outputTarget.innerHTML = outputHTML;

//Exercise 6
var outputTarget = document.querySelector(".ex-6");
var outputHTML = "<ul>";
var n = 1;
var numDescr = "";

while (n <= 100) {
  if (n % 3 === 0 && n % 5 === 0) {
    numDescr = "FizzBuzz";
  }
  else if (n % 3 === 0) {
    numDescr = "Fizz";
  }
  else if (n % 5 === 0){
    numDescr = "Buzz";
  }
  else {
    numDescr = "";
  }
  console.log(n + " " + numDescr);
  outputHTML += "<li>" + n + " " + numDescr + "</li>";
  n++;
}

outputHTML += "</ul>";
outputTarget.innerHTML = outputHTML;
