// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);
dom_choiceA.addEventListener("click", function() { onPlayerSubmit("A"); });
dom_choiceB.addEventListener("click", function() { onPlayerSubmit("B"); });
dom_choiceC.addEventListener("click", function() { onPlayerSubmit("C"); });
dom_choiceD.addEventListener("click", function() { onPlayerSubmit("D"); });

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
  {
    title: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Data Object Management",
    choiceC: "Digital Output Method",
    choiceD: "Display Object Manipulation",
    correct: "A",
  },
  {
    title: "Which symbol is used for comments in JavaScript?",
    choiceA: "<!-- -->",
    choiceB: "/* */",
    choiceC: "//",
    choiceD: "Both B and C",
    correct: "D",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
  
}

function show(element) {
  // TODO
  element.style.display = "block"
 
}

function onStart() {
  // Render the current question
  // Display the quiz view, 
  hide(dom_start)
  show(dom_quiz)
  renderQuestion()
}


function renderQuestion() {
  // Render the current question on the quiz view
  
  dom_question.textContent = questions[runningQuestionIndex].title
  dom_choiceA.textContent =questions[runningQuestionIndex].choiceA
  dom_choiceB.textContent =questions[runningQuestionIndex].choiceB
  dom_choiceC.textContent =questions[runningQuestionIndex].choiceC
  dom_choiceD.textContent =questions[runningQuestionIndex].choiceD
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  if (answer == questions[runningQuestionIndex].correct){
    score++;
  }
  runningQuestionIndex++
  
  if (runningQuestionIndex == questions.length){
    renderSCore()
  }
  else{
    renderQuestion()
  }
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
  show(dom_score);
  hide(dom_quiz);
  const images = document.createElement("img")
  
  const scorePerCent = score * 20 
  const text = document.createElement("h1")
  dom_score.appendChild(images) 
  dom_score.appendChild(text)
  
  if (scorePerCent <= 20 ){
    images.src = "images /20.png"
    text.textContent = "SO SAD :  " + scorePerCent +" Total correct : " + score;
  }
  else if (scorePerCent > 20 && scorePerCent <= 40  ){
    images.src = "images /40.png"
    text.textContent = "BETTER LUCK NEXT TIME :  " + scorePerCent +" Total correct : " + score ;
  }
  else if (scorePerCent > 40 && scorePerCent <= 60 ){
    images.src = "images /60.png"
    text.textContent = "NEARLY THERE : " + scorePerCent +" Total correct : " + score ;
  }
  else if (scorePerCent > 60 && scorePerCent <= 80 ){
    images.src = "images /60.png"
    text.textContent = "NOW YOU PASS :  " + scorePerCent +" Total correct : " + score ;
  }
  else {
    images.src = "images /100.png"
    text.textContent = "GREAT JOB : " + scorePerCent +" Total correct : " + score ;
  }
  
 
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
