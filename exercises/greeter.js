var name = prompt('What is your name?');

var checkName = function() {
  if(name === "") {
    name = prompt('What is your name, for real this time?');

    checkName();
  }
}

checkName();
alert('Hello ' + name);


var userAge = prompt('How old are you, ' + name + '?');

var checkUserAge = function() {
  if(isNaN(userAge) || userAge === "") {
    userAge = prompt(name + ', come on! Give me a number: how old are you?');
    checkUserAge();
  }
}

checkUserAge();

var greetUser = function() {
  if(userAge < 18) {
    alert(name + ", please don't try this at home!");
  }
  else {
    console.log('Wow, ' + name + ', are you old or what!?');
    alert(name + ", view the console if you dare!");
  }
}

greetUser();
