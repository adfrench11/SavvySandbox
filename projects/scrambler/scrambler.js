function setStyles() {
  $('.noun').css('font-weight', 'bold');
  $('.adj').css('color', 'red');
  $('.verb').css('color', 'green');
  $('.adv').css('font-style', 'italic');

  var codeStyles = {
    'background-color': '#e2e2e2',
    'border-radius': '3px',
    'padding': '2px 3px 3px 5px',
    'font-size': '1.05em'
  }

  var pStyles = {
    'line-height': '1.5',
    'margin': '8px'
  }

  $('code').css(codeStyles);

  $('p').css(pStyles);
}

function stringPrinter(string){
	$('#output').append("<p>" + string + "</p>");
  setStyles();
}

function funnySentence(noun, adj, verb, adv){
  $('#output').append("<p>The <span class='adj'>" + adj + "</span> <span class='noun'>" + noun + "</span> likes to <span class='verb'>" + verb + "</span> <span class='adv'>" + adv + "</span>.</p>");
  setStyles();
}

var nouns = ["puppy", "rabbit", "cat", "pig", "horse"];
var adjs = ["cute", "happy", "clever", "smart", "silly"];
var verbs = ["lick", "hop", "sneak", "roll", "run"];
var advs = ["sweetly", "bouncily", "secretly", "joyfully", "rapidly"];
var randomWords = [nouns, adjs, verbs, advs];

function pickRandom(inputArray){
   var index = Math.floor(Math.random()*inputArray.length);
   return inputArray[index];
}

function funnierSentence(){
  var rNoun = pickRandom(randomWords[0]);
  var rAdj = pickRandom(randomWords[1]);
  var rVerb = pickRandom(randomWords[2]);
  var rAdv = pickRandom(randomWords[3]);

  funnySentence(rNoun, rAdj, rVerb, rAdv);
}

stringPrinter("Welcome to my Scrambler page!");
stringPrinter("The stringPrinter function adds this text to the page.");
stringPrinter("You can add text too! In the console, type <code>stringPrinter();</code> with a string of your choice between the parentheses, e.g. <code>stringPrinter('boo!');</code>");
stringPrinter("The funnySentence function adds the funny sentences below.");

funnySentence("puppy", "cute", "lick", "sweetly");
funnySentence("rabbit", "happy", "hop", "bouncily");
funnySentence("cat", "clever", "sneak", "secretly");
funnySentence("pig", "smart", "roll", "joyfully");
funnySentence("horse", "silly", "run", "rapidly");

stringPrinter("You can add funny sentences too! In the console, type <code>funnySentence(noun, adj, verb, adv);</code> using string arguments of your choice, e.g. <code>funnySentence('beanstalk', 'giant', 'grow', 'wildly');</code>");

stringPrinter("The funnierSentence function adds the following silly sentences, randomly generated from the nouns, adjectives, verbs, and adverbs used in the funny sentences above.");

for (i = 0; i < 5; i++){
  funnierSentence();
}

stringPrinter("You can add silly sentences too! In the console, type <code>funnierSentence();</code>");
stringPrinter("You can even change the 'madlibs' options for the funnier sentences! In the console, type <code>randomWords;</code> to view the current options, then update them, e.g. <code>randomWords[2] = ['walk', 'bike', 'swim'];</code> and finally, call <code>funnierSentence();</code> again.");
