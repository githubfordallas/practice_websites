/*---[ C O D E   M O D U L E ]---*/
var code = [
  {
    title: "/*---[ Hello World ]---*/",
    requirments: ["// write a simple console program that", "// displays 'Hello, World!'"],
    hidden: true,
    code: ["function greet() {", "  console.log('Hello, World!');", "}", "", "greet();"],
    result: ["// Hello, World!", "// Test..."]
  },
  {
    title: "/*---[ Hello World 2 ]---*/",
    requirments: ["// write a simple console program that 2", "// displays 'Hello, World! 2'"],
    hidden: true,
    code: ["function greet() {", "  console.log('Hello, World!');", "}", "", "greet(); 2"],
    result: ["// Hello, World! 2", "// Test...2"]
  }
];



var mod = {
  // Creates an array of every div.
  toggleMe: document.querySelectorAll('div'),
  // Toggles the selected div class name from hide <-> show
  toggleDiv: function(div) {
    if (this.toggleMe[div].className === "hide") {
      this.toggleMe[div].className = "show";
    } else {
      this.toggleMe[div].className = "hide";
    }
  }
}



function displayCode() {
  var wrapper = document.getElementsByClassName('wrapper')[0];

  // cycle through code
  for (var i = 0; i < code.length; i++) {

    // create/set/append module <div>
    var mod = document.createElement('div');
    mod.setAttribute('class', 'module');
    wrapper.appendChild(mod);

    // create/set/append title <p>
    var title = document.createElement('p');
    title.setAttribute('class', 'title comment');
    title.textContent = code[i].title;
    mod.appendChild(title);

    // create/append <ol>
    var ol = document.createElement('ol');
    mod.appendChild(ol);

    // cycle through requirments
    for (var f = 0; f < code[i].requirments.length; f++) {

      // create/set/append requirments <div>
      var reqDiv = document.createElement('div');
      ol.appendChild(reqDiv);

      // create/append requirements <li>
      var reqLi = document.createElement('li');
      reqDiv.appendChild(reqLi);

      // create/set/append requirements line <span>
      var reqLine = document.createElement('span');
      reqLine.setAttribute('class', 'line comment');
      reqLine.textContent = code[i].requirments[f];
      reqLi.appendChild(reqLine);
    }

    // create/append toggle <li>
    var toggleLi = document.createElement('li');
    reqDiv.appendChild(toggleLi);

    // create/set/append toggle line <span>
    var toggleLine = document.createElement('span');
    toggleLine.setAttribute('class', 'line comment');
    toggleLi.appendChild(toggleLine);

    // create/set/append toggle <a>
    var toggleA = document.createElement('a');
    toggleA.textContent = '// Toggle Code...';
    toggleLine.appendChild(toggleA);

    // cycle trough code.code
    for (var a = 0; a < code[i].code.length; a++) {

      // create/set/append code <div>
      var codeDiv = document.createElement('div');
      codeDiv.setAttribute('class', 'show'); // SWITCH TO HIDE //
      ol.appendChild(codeDiv);

      // create/set/append code <li>
      var codeLi = document.createElement('li');
      codeDiv.appendChild(codeLi);

      // create/set/append code line <span>
      var codeLine = document.createElement('span');
      codeLine.setAttribute('class', 'line');
      codeLine.textContent = code[i].code[a];
      codeLi.appendChild(codeLine);
    }

    for (var w = 0; w < code[i].result.length; w++) {

      // create/set/append results <div>
      var resultsDiv = document.createElement('div');
      ol.appendChild(resultsDiv);

      // create/append results <li>
      var resultsLi = document.createElement('li');
      resultsDiv.appendChild(resultsLi);

      // create/set/append results line <span>
      var resultsLine = document.createElement('span');
      resultsLine.setAttribute('class', 'line comment');
      resultsLine.textContent = code[i].result[w];
      resultsLi.appendChild(resultsLine);
    }
  }
}

displayCode();
