var greeting = "Welcome to the jQuery Sandbox!";

$(".greeting").hide();
$(".greeting").text(greeting);
$(".greeting").slideDown();
$("body").css("background-color", "cyan");
$(".console-suggestion").text("Open the JS Console and try some commands!");
$(".console-suggestion").css("font-weight", "bold");
$("ul").html("<li>One</li><li>Two</li><li>Three</li>");
$("ul").css("width", "100px");
$("ul").css("border", "3px dashed yellow");
$(".console-suggestion").css("color", "#bb5163");

$("#fun-quote").html("<h4>..have you ever stopped and wondered..</h4>");

var properties = {
  "font-size": "150%",
  "left": "50px"
}

var options = {
  "duration": "slow"
}

$("h4").css("font-style", "italic");

$("h4").animate(properties, options);

$("div>h4").prepend("'Hey there, ").append(" what's out there?'");

$("h4").fadeOut();
$("ul").slideToggle();
$("h4").fadeIn();
$("ul").slideToggle();
