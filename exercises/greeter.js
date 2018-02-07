var name = prompt('What is your name?');

var checkName = function() {
  if( !isNaN(name) || name == false || name === null ) {
    name = prompt('What is your name, for real this time?');

    checkName();
  }
}

checkName();
alert('Hello ' + name);


var userAge = prompt('How old are you, ' + name + '?');

var checkUserAge = function() {
  if( isNaN(userAge) || userAge == false || userAge === null ) {
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



var tellJoke = function() {
  alert("Okay, get ready for a dumb knock-knock joke, " + name + "!");
  var whoIsThere = prompt("KNOCK, KNOCK!", "WHO'S THERE?");
  if (whoIsThere !== "WHO'S THERE?") {
      alert("Sorry, " + name + ", no joke for you!");
  } else {
      var blankWho = prompt("HATCH.", "HATCH WHO?");
      if (blankWho !== "HATCH WHO?") {
        alert("Well, " + name + ", I was going to tell you more, but I guess you don't want to know!");
      } else {
        alert("GESUNDHEIT!");
      }
  }
}

tellJoke();
