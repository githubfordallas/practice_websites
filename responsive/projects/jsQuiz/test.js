var quizModule = {

  init: function() {
    this.quiz = [{
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
    this.chosenAnswer = undefined;
    this.correctlyAnswered = 0;
    this.setCounter = 0;
    this.domCaches();
    this.createSet(0);
    this.listenForEvents();
  },

  domCaches: function() {
    this.container = document.getElementById('quizModule');
  },

  createSet: function(set) {
    // QUESTION
    var questionEl = document.createElement('li');
    questionEl.textContent = this.quiz[set].question;
    this.container.appendChild(questionEl);

    // CHOICES
    for (var i = 0; i < this.quiz[set].choices.length; i++) {
      var section = document.createElement('li');
      this.container.appendChild(section);

      var radio = document.createElement('input');
      radio.setAttribute('type','radio');
      radio.setAttribute('id', i);
      radio.setAttribute('name','choices');
      radio.className = 'radioBtn';
      section.appendChild(radio);

      var choiceText = document.createElement('span');
      choiceText.textContent = i + ' ' + this.quiz[set].choices[i];
      section.appendChild(choiceText);
    }

    // Button Section
    var btnSection = document.createElement('li');
    this.container.appendChild(btnSection);

    // Back Button
    // var backBtn = document.createElement('button');
    // backBtn.className = 'backBtn';
    //
    // var backText = document.createTextNode('Back');
    // backBtn.appendChild(backText);
    // btnSection.appendChild(backBtn);

    // Next Button
    var nextBtn = document.createElement('button');
    nextBtn.className = 'nextBtn';

    var nextText = document.createTextNode('Next');
    nextBtn.appendChild(nextText);
    btnSection.appendChild(nextBtn);

    // Validation Zone
    var validSection = document.createElement('li');
    validSection.textContent = '!!! YOU MUST ANSWER !!!';
    validSection.className = 'hide';
    this.container.appendChild(validSection);
  },

  answer: function(choice) {
    if (choice === undefined) {

    }
    if (choice === this.quiz[this.setCounter].correctAnswer) {
      this.correctlyAnswered++;
    }

    this.setCounter++;
    if (this.setCounter >= this.quiz.length) {
      this.grade();
    } else {
      this.removeLast();
      this.createSet(this.setCounter);
    }
    this.chosenAnswer = undefined;
  },

  removeLast: function() {
    while (this.container.childNodes[0]) {
      this.container.removeChild(this.container.childNodes[0]);
    }
  },

  grade: function() {
    this.removeLast();
    var grade = document.createElement('li');
    grade.textContent = this.correctlyAnswered + ' Out Of ' + this.quiz.length;
    this.container.appendChild(grade);
  },

  listenForEvents: function() {
    this.container.addEventListener('click', function(event) {
      var elClicked = event.target;
      if (elClicked.className === 'radioBtn') {
        this.chosenAnswer = parseInt(elClicked.id);
      } else if (elClicked.className === 'nextBtn') {
        quizModule.answer(this.chosenAnswer); /*--[ why can't I use this? ]--*/
      }
    });
  }
};

quizModule.init();
