var response = prompt("You walk into a room and see a table. On the table are a book and a glass of wine. Type 'read' to open the book, or type 'drink' to drink the wine.");

if(response === "read"){
  response = prompt("You open the book and suddenly the window opens, and wind starts blowing into the room. Type 'close' to close the book, or type 'gaze' to go look out the window.");
  if(response === "close"){
    response = prompt("This room is spooky! Type 'leave' to leave, or type 'stay' to stay.");
    if(response === "leave"){
      alert("Bye!");
    }
    else if(response === "stay"){
      response = prompt("You hear a noise coming from the wall and go to check it out. You can see three bricks painted to blend in with the wall. Type 'first' to touch the first brick, type 'second' to touch the second brick, or type 'third' to touch the third brick.");
      if(response === "first" || response === "third"){
        alert("The wall falls down, revealing a room filled with books. It has shelves on each wall stretching to the ceiling, and there are ladders you can move to get to any book. There's also a cozy chair by a fire, waiting for you. Enjoy!");
      }
      else if(response === "second"){
        alert("The entire room disintegrates before your eyes and is gone forever. Ah, well, back to life!");
      }
      else {
        alert("Please type in a valid input! Refresh the page and try again.");
      }
    }
    else {
      alert("Please type in a valid input! Refresh the page and try again.");
    }
  }
  else if(response === "gaze"){
    response = prompt("You look out the window and see a cat and a floating lollipop. Type 'cat' to go to the cat, or type 'lollipop' to go to the lollipop.");
    if(response === "cat"){
      alert("The cat leads you to a rock. You look under the rock and find a miniature civilization. You thank the cat and Enjoy!");
    }
    else if(response === "lollipop"){
      alert("The lollipop flies away from you and you chase it until you stumble upon a rainbow. Yes, the end of a rainbow! There's no pot of gold, but it sure feels special. Enjoy!");
    }
    else {
      alert("Please type in a valid input! Refresh the page and try again.");
    }
  }
  else {
    alert("Please type in a valid input! Refresh the page and try again.");
  }
}
else if(response === "drink"){
  response = prompt("You take a sip and suddenly the door slams shut! Type 'stop' to put the glass down, or type 'look' to look at the door.");
  if(response === "stop"){
    response = prompt("This room is spooky! Type 'leave' to leave, or type 'stay' to stay.");
    if(response === "leave"){
      alert("Bye!");
    }
    else if(response === "stay"){
      response = prompt("You hear a noise coming from the wall and go to check it out. You can see three bricks painted to blend in with the wall. Type 'first' to touch the first brick, type 'second' to touch the second brick, or type 'third' to touch the third brick.");
      if(response === "first" || response === "third"){
        alert("The wall falls down, revealing a room filled with books. It has shelves on each wall stretching to the ceiling, and there are ladders you can move to get to any book. There's also a cozy chair by a fire, waiting for you. Enjoy!");
      }
      else if(response === "second"){
        alert("The entire room disintegrates before your eyes and is gone forever. Ah, well, back to life!");
      }
      else {
        alert("Please type in a valid input! Refresh the page and try again.");
      }
    }
    else {
      alert("Please type in a valid input! Refresh the page and try again.");
    }
  }
  else if(response === "look"){
    response = prompt("You look at the door and see a wizard and an owl. Type 'wizard' to go to the wizard, or type 'owl' to go to the owl.")
    if(response === "wizard"){
      alert("The wizard hands you a small pouch, and suddenly you're back to reality. But you still have the pouch! You look inside and find magic soil. Enjoy!");
    }
    else if(response === "owl"){
      alert("The owl seems shy, turning its head around and burying its head in its fur. But its head quickly emerges, and then the owl is looking at you again with a tiny box hanging from its beak. You take the box, and suddenly you're back to reality. You open the box and find a magic seed. Enjoy!");
    }
    else {
      alert("Please type in a valid input! Refresh the page and try again.");
    }
  }
  else {
    alert("Please type in a valid input! Refresh the page and try again.");
  }
}
else {
  alert("Please type in a valid input! Refresh the page and try again.");
}
