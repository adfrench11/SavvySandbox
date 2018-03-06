// Define adventures
let adventures = {
  table: {
    type: 'prompt',
    prompt: 'You walk into a room and see a table. On the table are a book and a glass of wine. What do you do?',
    option1: {
      text: 'Open the book',
      value: 'book'
    },
    option2: {
      text: 'Drink the wine',
      value: 'wine'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  book: {
    type: 'prompt',
    prompt: 'You open the book and suddenly the window opens, and wind starts blowing into the room.',
    option1: {
      text: 'Close the book',
      value: 'stop'
    },
    option2: {
      text: 'Look out the window',
      value: 'window'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  wine: {
    type: 'prompt',
    prompt: 'You take a sip and suddenly the door slams shut!',
    option1: {
      text: 'Put the glass down',
      value: 'stop'
    },
    option2: {
      text: 'Look at the door',
      value: 'door'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  stop: {
    type: 'prompt',
    prompt: 'This room is spooky!',
    option1: {
      text: 'Leave',
      value: 'leave',
    },
    option2: {
      text: 'Stay',
      value: 'stay'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  'window': {
    type: 'prompt',
    prompt: 'You look out the window and see a cat and a floating lollipop.',
    option1: {
      text: 'Go to the cat',
      value: 'cat',
    },
    option2: {
      text: 'Go to the lollipop',
      value: 'lollipop'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  door: {
    type: 'prompt',
    prompt: 'You look at the door and see a wizard and an owl.',
    option1: {
      text: 'Go to the wizard',
      value: 'wizard',
    },
    option2: {
      text: 'Go to the owl',
      value: 'owl'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  stay: {
    type: 'prompt',
    prompt: 'You hear a noise coming from the wall and go to check it out. You can see three bricks painted to blend in with the wall.',
    option1: {
      text: 'Tap the first brick',
      value: 'bricksBC',
    },
    option2: {
      text: 'Tap the second brick',
      value: 'life'
    },
    option3: {
      text: 'Tap the third brick',
      value: 'bricksAB'
    }
  },

  bricksBC: {
    type: 'prompt',
    prompt: "Hm, that didn't do anything. Maybe try another brick?",
    option1: {
      text: 'Tap the second brick',
      value: 'life',
    },
    option2: {
      text: 'Tap the third brick',
      value: 'cozy'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  bricksAB: {
    type: 'prompt',
    prompt: "Hm, that didn't do anything. Maybe try another brick?",
    option1: {
      text: 'Tap the first brick',
      value: 'cozy',
    },
    option2: {
      text: 'Tap the second brick',
      value: 'life'
    },
    option3: {
      text: '',
      value: ''
    }
  },

  life: {
    type: 'ending',
    ending: 'The entire room disintegrates before your eyes and is gone forever. Ah, well, back to life!'
  },

  cozy: {
    type: 'ending',
    ending: "The wall falls down, revealing a room filled with books. It has shelves on each wall stretching to the ceiling, and there are ladders you can move to get to any book. There's also a cozy chair by a fire, waiting for you. Enjoy!"
  },

  leave: {
    type: 'ending',
    ending: 'Bye!'
  },

  cat: {
    type: 'ending',
    ending: 'The cat leads you to a rock. You look under the rock and find a miniature civilization. You thank the cat and Enjoy!'
  },

  lollipop: {
    type: 'ending',
    ending: "The lollipop flies away from you and you chase it until you stumble upon a rainbow. Yes, the end of a rainbow! There's no pot of gold, but it sure feels special. Enjoy!"
  },

  wizard: {
    type: 'ending',
    ending: "The wizard hands you a small pouch, and suddenly you're back to reality. But you still have the pouch! You look inside and find magic soil. Enjoy!"
  },

  owl: {
    type: 'ending',
    ending: "The owl seems shy, turning its head around and burying its head in its fur. But its head quickly emerges, and then the owl is looking at you again with a tiny box hanging from its beak. You take the box, and suddenly you're back to reality. You open the box and find a magic seed. Enjoy!"
  }

}; // close adventures

// Define functions
function renderPrompt(promptObj){

  $('#cyoa-container').html("<p id='prompt'></p><form><label id='option-1'></label><label id='option-2'></label><label id='option-3'></label><input type='submit'></form>");

  $('#prompt').text(promptObj.prompt);
  $('#option-1').html("<input type='radio' name='option' value='" + promptObj.option1.value + "'><span>" + promptObj.option1.text + "</span></input>");
  $('#option-2').html("<input type='radio' name='option' value='" + promptObj.option2.value + "'><span>" + promptObj.option2.text + "</span></input>");
  if (promptObj.option3.text === "") {
    $('#option-3').hide();
  }
  else {
    $('#option-3').html("<input type='radio' name='option' value='" + promptObj.option3.value + "'><span>" + promptObj.option3.text + "</span></input>");
    $('#option-3').show();
  }

};

function renderEnding(promptObj){
  $('#cyoa-container').html("<p>" + promptObj.ending + "</p>");
};

function renderAdventureContent(promptObj) {
  if (promptObj.type === "prompt") {
    renderPrompt(promptObj);
  } else {
    renderEnding(promptObj);
  }
};

function respondToInput(){
  $('input').on('click', (event) => {

    $('form').submit(function(event) {
      event.preventDefault();
    });

    let choice = $('input:checked').val();
    console.log(choice);

    renderAdventureContent(adventures[choice]);
    respondToInput();
  });
};

// Run cyoa!
renderAdventureContent(adventures.table);
respondToInput();
