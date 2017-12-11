var quiz = [{
  question: "Question 0 place holder?",
  choices:["Correct", "Wrong", "Double Wrong"],
  correctAnswer: 0
  }, {
  question: "Question 1 place holder?",
  choices: ["Double Wrong", "Correct", "Wrong"],
  correctAnswer: 1
  }, {
  question: "Question 2 place holder?",
  choices: ["Wrong", "Double Wrong", "Correct"],
  correctAnswer: 2
  }
];

var chosenAnswer; // stores the digit for answer(digit); aka the choice
var correctlyAnswered = 0;
var setCounter = 0; // keeps track of what question your on

var container = document.querySelector('ul'); // parent container

function displaySet(set) {
  // QUESTION
  var questionEl = document.createElement('li'); // question
  questionEl.textContent = quiz[set].question; // add question
  container.appendChild(questionEl); // attach to the ul

  // CHOICES
  for (var i = 0; i < quiz[set].choices.length; i++) {
    var section = document.createElement('li'); // create section li
    container.appendChild(section); // appending li to container

    var radio = document.createElement('input'); // creating input
    radio.setAttribute('type','radio'); // making input into radion btn
    radio.setAttribute('id', i); // setting the id for each radio btn
    radio.setAttribute('name','choices'); // sets name for radios
    radio.className = 'radioBtn'; // classing radioBtn
    section.appendChild(radio); // appending radio to section li

    var choiceText = document.createElement('span'); // choice content el
    choiceText.textContent = i + ' ' + quiz[set].choices[i]; // adding text
    section.appendChild(choiceText); // appending choice to section node
  }

  // SUBMIT
  var submitSection = document.createElement('li'); // create submit section
  container.appendChild(submitSection); // append to bottom

  var submitBtn = document.createElement('button'); // create btn el
  submitBtn.className = 'submitBtn'; // setting its class name

  var submitText = document.createTextNode('Submit'); // create its text node
  submitBtn.appendChild(submitText); // append the text node to btn el
  submitSection.appendChild(submitBtn); // append the btn el to container
}

function answer(choice) {
  if (choice === quiz[setCounter].correctAnswer) { // if correct
    correctlyAnswered++; // plus one
  }

  setCounter++; // next feature
  if (setCounter >= quiz.length) { // if greater than or equal to quiz.length
    grade(); // print grade once you submit last answer
  } else {
    removeLast(); // removes all children from ul
    displaySet(setCounter); // print next question
  }
  chosenAnswer = undefined; // reset choice to undefined
}

function removeLast() { // remove children function
  while (container.childNodes[0]) { // whilre children exist
    container.removeChild(container.childNodes[0]); // remove them
  }
}

function grade() {
  removeLast(); // removes all children from ul
  var grade = document.createElement('li'); // creating li el
  grade.textContent = correctlyAnswered + ' Out Of ' + quiz.length; //grade txt
  container.appendChild(grade); // appending to the bottom of all the li
}

function listenForEvents() { // track input clicked
  container.addEventListener('click', function(event) {
    var elClicked = event.target; // making input#id a variale
    if (elClicked.className === 'radioBtn') { // classes match??
      chosenAnswer = parseInt(elClicked.id); // if so then store answer
    } else if (elClicked.className === 'submitBtn') { // class match
      answer(chosenAnswer); // run answer function with choosen answer var
    }
  });
}

displaySet(setCounter); // initializing the first question and its choices
listenForEvents(); // listens for clicks, if input, stores choice
