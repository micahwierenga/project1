
var selectedAnswer = "";

var questionArray = [];

var counter = 0;

var scoreKeeper = [];

var playerTurn = 0;

var questionAnswerBox = document.getElementById("questionAnswerBox");


function MultipleChoice (question, answer1, answer2, answer3, answer4, correctAnswer, nextQ, categoryId) {
	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correctAnswer = correctAnswer;
	this.nextQ = nextQ;
}

var q1 = new MultipleChoice ("Ankara is the capital of:", "Cyprus", "Kazakhstan", "Turkey", "Jordan", "Turkey");
questionArray.push(q1);

var q2 = new MultipleChoice ("Which list of element tags contains all block elements?", "p, span, div", "span, a, h1", "h1, strong, li", "div, h2, p", "div, h2, p");
questionArray.push(q2);

var q3 = new MultipleChoice ("Which of the following songs was done by REM?", "We Didn't Start the Fire", "Babylon", "American Idiot", "Losing My Religion", "Losing My Religion");
questionArray.push(q3);

var q4 = new MultipleChoice ("What is the capital of Brazil?", "Brasilia", "Rio de Janeiro", "Sao Paulo", "Belo Horizonte", "Brasilia");
questionArray.push(q4);

var q5 = new MultipleChoice ("What is the capital of Colorado?", "Colorado Springs", "Denver", "Grand Junction", "Fort Collins", "Denver");
questionArray.push(q5);

var q6 = new MultipleChoice ("The CSS selector a:hover is an example of:", "Hover class", "Pseudo-class", "Sub-selector", "Sub-attribute", "Pseudo-class");
questionArray.push(q6);

var q7 = new MultipleChoice ("In Javascript, an object that can be referenced by all instances of that object is called:", "Constructor", "Ideal", "Prototype", "Method", "Prototype");
questionArray.push(q7);

var q8 = new MultipleChoice ("Which metropolitan area has teams from all four major American sports?", "Detroit", "Kansas City", "Miami", "Pittsburgh", "Detroit");
questionArray.push(q8);

var q9 = new MultipleChoice ("Which movie was loosely based on Homer's Odyssey?", "Out of Africa", "O Brother Where Art Thou", "Tristan and Isolde", "Footloose", "O Brother Where Art Thou");
questionArray.push(q9);

var q10 = new MultipleChoice ("Where was the last place Albert Einstein lived?", "Cambridge, Massachusetts", "Oxford, United Kingdom", "Stuttgart, Germany", "Princeton, New Jersey", "Princeton, New Jersey");
questionArray.push(q10);

var q10 = new MultipleChoice ("What capital?", "this", "that", "there", "here", "here");
questionArray.push(q10);

function createQuestion1() {
	var questionBox = document.createElement("div");
	questionBox.setAttribute("class", "questionBox");
	questionBox.innerHTML = questionArray[counter].question;
	questionAnswerBox.appendChild(questionBox);
	var answerBox1 = document.createElement("div");
	answerBox1.setAttribute("class", "answerBox");
	answerBox1.setAttribute("id", "answer1")
	answerBox1.innerHTML = questionArray[counter].answer1;
	questionAnswerBox.appendChild(answerBox1);
	var answerBox2 = document.createElement("div");
	answerBox2.setAttribute("class", "answerBox");
	answerBox2.setAttribute("id", "answer2")
	answerBox2.innerHTML = questionArray[counter].answer2;
	questionAnswerBox.appendChild(answerBox2);
	var answerBox3 = document.createElement("div");
	answerBox3.setAttribute("class", "answerBox");
	answerBox3.setAttribute("id", "answer3")
	answerBox3.innerHTML = questionArray[counter].answer3;
	questionAnswerBox.appendChild(answerBox3);
	var answerBox4 = document.createElement("div");
	answerBox4.setAttribute("class", "answerBox");
	answerBox4.setAttribute("id", "answer4")
	answerBox4.innerHTML = questionArray[counter].answer4;
	questionAnswerBox.appendChild(answerBox4);
	chooseAnswer();
}

function chooseAnswer() {
	var chooseAnswer1 = document.getElementById("answer1");
	chooseAnswer1.addEventListener("click", function() {
		selectedAnswer = chooseAnswer1.textContent;
		displayAnswer();
		keepScoreP1();
		keepScoreP2();
		nextQuestion();
	});
	var chooseAnswer2 = document.getElementById("answer2");
	chooseAnswer2.addEventListener("click", function() {
		selectedAnswer = chooseAnswer2.textContent;
		displayAnswer();
		keepScoreP1();
		keepScoreP2();
		nextQuestion();
	});
	var chooseAnswer3 = document.getElementById("answer3");
	chooseAnswer3.addEventListener("click", function() {
		selectedAnswer = chooseAnswer3.textContent;
		displayAnswer();
		keepScoreP1();
		keepScoreP2();
		nextQuestion();
	});
	var chooseAnswer4 = document.getElementById("answer4");
	chooseAnswer4.addEventListener("click", function() {
		selectedAnswer = chooseAnswer4.textContent;
		displayAnswer();
		keepScoreP1();
		keepScoreP2();
		nextQuestion();
	});
};

function displayAnswer() {
	if (selectedAnswer === questionArray[counter].correctAnswer) {
		var displayAnswer = document.createElement("div");
		displayAnswer.textContent = "You are correct!";			
		displayAnswer.setAttribute("id", "answerDisplayCorrect");
		var answerDisplayBox = document.getElementById("answerDisplayBox");
		answerDisplayBox.appendChild(displayAnswer);		
		var nextQuestionButton = document.createElement("button");
		nextQuestionButton.setAttribute("id", "show");
		nextQuestionButton.textContent = "Next Question";
		var nextQuestionBox = document.getElementById("nextQuestionBox");
		nextQuestionBox.appendChild(nextQuestionButton);
	} else {
		var displayAnswer = document.createElement("div");
		displayAnswer.textContent = "The correct answer is " + questionArray[counter].correctAnswer;
		displayAnswer.setAttribute("id", "answerDisplayIncorrect");
		var answerDisplayBox = document.getElementById("answerDisplayBox");
		answerDisplayBox.appendChild(displayAnswer);
		var nextQuestionButton = document.createElement("button");
		nextQuestionButton.setAttribute("id", "show");
		nextQuestionButton.textContent = "Next Question";
		var nextQuestionBox = document.getElementById("nextQuestionBox");
		nextQuestionBox.appendChild(nextQuestionButton);
	}
};

function keepScoreP1() {
	if (selectedAnswer === questionArray[counter].correctAnswer && playerTurn < 9) {
		var addPoint = 1;
		scoreKeeper.push(addPoint);
		var p1ScoreSum = scoreKeeper.reduce(function add(previous, current) {
			return current + previous;
		});
		var p1Scoreboard = document.getElementById("player1Score");
		p1Scoreboard.textContent = p1ScoreSum;
	} else if (selectedAnswer !== questionArray[counter].correctAnswer && playerTurn < 9) {
		var noPoint = 0;
		scoreKeeper.push(noPoint);
		var p1ScoreSum = scoreKeeper.reduce(function add(previous, current) {
			return current + previous;
		});
		var p1Scoreboard = document.getElementById("player1Score");
		p1Scoreboard.textContent = p1ScoreSum;
	} else {
		console.log("what the")
	}
};

function keepScoreP2() {
	if (selectedAnswer === questionArray[counter].correctAnswer && playerTurn > 8) {
		console.log("can second player go now?")
		var addPoint = 1;
		scoreKeeper.push(addPoint);
		var p2ScoreSum = scoreKeeper.reduce(function add(previous, current) {
			return current + previous;
		});
		var p2Scoreboard = document.getElementById("player2Score");
		p2Scoreboard.textContent = p2ScoreSum;
	} else if (selectedAnswer !== questionArray[counter].correctAnswer && playerTurn > 8) {
		console.log("now what about now?")
		var noPoint = 0;
		scoreKeeper.push(noPoint);
		var p2ScoreSum = scoreKeeper.reduce(function add(previous, current) {
			return current + previous;
		});
		var p2Scoreboard = document.getElementById("player2Score");
		p2Scoreboard.textContent = p2ScoreSum;
	} else {
		
	}
};

function nextQuestion() {
	var nextQuestionButton = document.getElementById("show");
	nextQuestionButton.addEventListener("click", function() {		
		counter += 1;
		var questionAnswerBox = document.getElementById("questionAnswerBox");
		questionAnswerBox.innerHTML = "";
		var questionBox = document.createElement("div");
		questionBox.setAttribute("class", "questionBox");
		questionBox.innerHTML = questionArray[counter].question;
		questionAnswerBox.appendChild(questionBox);
		var answerBox1 = document.createElement("div");
		answerBox1.setAttribute("class", "answerBox");
		answerBox1.setAttribute("id", "answer1")
		answerBox1.innerHTML = questionArray[counter].answer1;
		questionAnswerBox.appendChild(answerBox1);
		var answerBox2 = document.createElement("div");
		answerBox2.setAttribute("class", "answerBox");
		answerBox2.setAttribute("id", "answer2")
		answerBox2.innerHTML = questionArray[counter].answer2;
		questionAnswerBox.appendChild(answerBox2);
		var answerBox3 = document.createElement("div");
		answerBox3.setAttribute("class", "answerBox");
		answerBox3.setAttribute("id", "answer3")
		answerBox3.innerHTML = questionArray[counter].answer3;
		questionAnswerBox.appendChild(answerBox3);
		var answerBox4 = document.createElement("div");
		answerBox4.setAttribute("class", "answerBox");
		answerBox4.setAttribute("id", "answer4")
		answerBox4.innerHTML = questionArray[counter].answer4;
		questionAnswerBox.appendChild(answerBox4);
		var answerDisplayBox = document.getElementById("answerDisplayBox");
		answerDisplayBox.innerHTML = "";
		var nextQuestionBox = document.getElementById("nextQuestionBox");
		nextQuestionBox.innerHTML = "";
		switchPlayers();
		chooseAnswer();
	})
};

function switchPlayers() {
	if (playerTurn === 9) {
		console.log("switch?");
		counter = 0;
		questionAnswerBox.innerHTML = "";
		createQuestion1();
	} else {
		playerTurn += 1;
		console.log("not your turn yet")
	}
};

function startGame() {
	var startButton = document.getElementById("startButton");
	startButton.addEventListener("click", function() {
		createQuestion1();
	});
};
startGame();





