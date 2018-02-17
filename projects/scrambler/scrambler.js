function stringPrinter(string){
	$('#output').append("<p>" + string + "</p>");
}

function funnySentence(noun, adj, verb, adv){
  $('#output').append("<p>The <span class='adj'></span> <span class='noun'></span> likes to <span class='verb'></span> <span class='adv'></span>.</p>");
  $('.noun').text(noun);
  $('.adj').text(adj);
  $('.verb').text(verb);
  $('.adv').text(adv);
}

function funnierSentence(){
  var nouns = ["puppy", "rabbit", "cat", "pig", "horse"];
  var adjs = ["cute", "happy", "clever", "smart", "silly"];
  var verbs = ["lick", "hop", "sneak", "roll", "run"];
  var advs = ["sweetly", "bouncily", "secretly", "joyfully", "rapidly"];
  var randomWords = [nouns, adjs, verbs, advs];

  function pickRandom(inputArray){
	   var index = Math.floor(Math.random()*inputArray.length);
     return inputArray[index];
  }

  var rNoun = pickRandom(randomWords[0]);
  var rAdj = pickRandom(randomWords[1]);
  var rVerb = pickRandom(randomWords[2]);
  var rAdv = pickRandom(randomWords[3]);
  var sentence = "The " + rAdj + " " + rNoun + " likes to " + rVerb + " " + rAdv + ".";

  stringPrinter(sentence);
}

stringPrinter("Welcome to my Scrambler page!");
stringPrinter("The stringPrinter function added this text to the page.");
stringPrinter("You can add text too! In the console, type 'stringPrinter();', with your string of choice between the parentheses.");
stringPrinter("The funnySentence function adds the funny sentence below.");

funnySentence("puppy", "cute", "lick", "sweetly");
// funnySentence("rabbit", "happy", "hop", "bouncily");
// funnySentence("cat", "clever", "sneak", "secretly");
// funnySentence("pig", "smart", "roll", "joyfully");
// funnySentence("horse", "silly", "run", "rapidly");

stringPrinter("You can change the funny sentence and add it to the end of the page. In the console, type 'funnySentence(noun, adj, verb, adv);', using string arguments of your choice for the noun, etc.");

stringPrinter("The funnierSentence function adds the following silly sentences, randomly generated from several nouns, adjectives, verbs, and adverbs.");

for (i = 0; i < 5; i++){
  funnierSentence();
}

stringPrinter("You can add silly sentences too! In the console, type 'funnierSentence();'.");
