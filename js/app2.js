var selectedAnswer = "";

var questionCounter = [];

var scoreKeeper = [];

var questionArray = [];

var displayAnswer = document.getElementsByClassName("answerDisplay");


function MultipleChoice (question, answer1, answer2, answer3, answer4, correctAnswer, nextQ, categoryId) {
	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correctAnswer = correctAnswer;
	this.nextQ = nextQ;
	this.categoryId = categoryId;
	this.appendQuestionsAnswers = function(question, answer1, answer2, answer3, answer4) {
		var question = document.getElementById("question");
		question.innerHTML = question;
		var chooseAnswer1 = document.getElementById("answer1");
		chooseAnswer1.innerHTML = answer1;
		var chooseAnswer2 = document.getElementById("answer2");
		chooseAnswer2.innerHTML = answer2;
		var chooseAnswer3 = document.getElementById("answer3");
		chooseAnswer3.innerHTML = answer3;
		var chooseAnswer4 = document.getElementById("answer4");
		chooseAnswer4.innerHTML = answer4;
		this.chooseAnswer(answer1, answer2, answer3, answer4, correctAnswer, nextQ);
	},
	this.chooseAnswer = function(answer1, answer2, answer3, answer4, correctAnswer, nextQ) {
		var chooseAnswer1 = document.getElementById("answer1");
		chooseAnswer1.addEventListener("click", function() {
			selectedAnswer = chooseAnswer1.textContent;
			this.displayAnswer(correctAnswer);
			this.keepScore(correctAnswer);
			this.nextQuestion(nextQ);
		});
		var chooseAnswer2 = document.getElementById("answer2");
		chooseAnswer2.addEventListener("click", function() {
			selectedAnswer = chooseAnswer2.textContent;
			this.displayAnswer(correctAnswer);
			this.keepScore(correctAnswer);
			this.nextQuestion(nextQ);
		});
		var chooseAnswer3 = document.getElementById("answer3");
		chooseAnswer3.addEventListener("click", function() {
			selectedAnswer = chooseAnswer3.textContent;
			this.displayAnswer(correctAnswer);
			this.keepScore(correctAnswer);
			this.nextQuestion(nextQ);
		});
		var chooseAnswer4 = document.getElementById("answer4");
		chooseAnswer4.addEventListener("click", function() {
			selectedAnswer = chooseAnswer4.textContent;
			this.displayAnswer(correctAnswer);
			this.keepScore(correctAnswer);
			this.nextQuestion(nextQ);
		});
	},
	this.displayAnswer = function(correctAnswer) {
		if (selectedAnswer === correctAnswer) {
			// var displayAnswer = document.getElementsByClassName("answerDisplay");
			displayAnswer.textContent = "You are correct!";			
			displayAnswer.setAttribute("id", "answerDisplayCorrect");
			var nextQuestionButton = document.getElementById("nextQuestion");
			nextQuestionButton.setAttribute("id", "show");
		} else {
			// var displayAnswer = document.getElementsByClassName("answerDisplay");
			displayAnswer.textContent = "The correct answer is " + correctAnswer;
			displayAnswer.setAttribute("id", "answerDisplayIncorrect");
			var nextQuestionButton = document.getElementById("nextQuestion");
			nextQuestionButton.setAttribute("id", "show");
		}
	},
	this.keepScore = function(correctAnswer) {
		if (selectedAnswer === correctAnswer) {
			var addPoint = 1;
			scoreKeeper.push(addPoint);
			var p1ScoreSum = scoreKeeper.reduce(function add(previous, current) {
				return current + previous;
			});
			var p1Scoreboard = document.getElementById("player1Score");
			p1Scoreboard.textContent = p1ScoreSum;
		} else {
			var noPoint = 0;
			scoreKeeper.push(noPoint);
			var p1ScoreSum = scoreKeeper.reduce(function add(previous, current) {
				return current + previous;
			});
			var p1Scoreboard = document.getElementById("player1Score");
			p1Scoreboard.textContent = p1ScoreSum;
		}
	},
	this.nextQuestion = function(nextQ) {
		var nextQuestionButton = document.getElementById("nextQuestion");
		nextQuestionButton.addEventListener("click", function() {
			var question = document.getElementById("question");
			question.innerHTML = nextQ.question;
			var chooseAnswer1 = document.getElementById("answer1");
			chooseAnswer1.innerHTML = nextQ.answer1;
			var chooseAnswer2 = document.getElementById("answer2");
			chooseAnswer2.innerHTML = nextQ.answer2;
			var chooseAnswer3 = document.getElementById("answer3");
			chooseAnswer3.innerHTML = nextQ.answer3;
			var chooseAnswer4 = document.getElementById("answer4");
			chooseAnswer4.innerHTML = nextQ.answer4;
		})
	}
};


var q3 = new MultipleChoice ("What is the capital of California?", "Los Angeles", "San Francisco", "San Diego", "Sacramento", "Sacramento");
questionArray.push(q3);

var q2 = new MultipleChoice ("What is the capital of Colorado?", "Colorado Springs", "Denver", "Grand Junction", "Fort Collins", "Denver", q3);
questionArray.push(q2);

var q1 = new MultipleChoice ("What is the capital of Alabama?", "Birmingham", "Mobile", "Montgomery", "Huntsville", "Montgomery", q2);
questionArray.push(q1);
q1.appendQuestionsAnswers("What is the capital of Alabama?", "Birmingham", "Mobile", "Montgomery", "Huntsville", "Montgomery");
q1.chooseAnswer("Birmingham", "Mobile", "Montgomery", "Huntsville", "Montgomery", q2);
// q1.displayAnswer("Montgomery");



// var startQuiz = function(questionNumber) {
// 	var startQuizButton = document.getElementById("startButton");
// 	startButton.addEventListener("click", function() {
// 	var question = document.getElementById("question");
// 	question.innerHTML = questionNumber.question;
// 	var chooseAnswer1 = document.getElementById("answer1");
// 	chooseAnswer1.innerHTML = questionNumber.answer1;
// 	var chooseAnswer2 = document.getElementById("answer2");
// 	chooseAnswer2.innerHTML = questionNumber.answer2;
// 	var chooseAnswer3 = document.getElementById("answer3");
// 	chooseAnswer3.innerHTML = questionNumber.answer3;
// 	var chooseAnswer4 = document.getElementById("answer4");
// 	chooseAnswer4.innerHTML = questionNumber.answer4;
// 	questionNumber.appendQuestionsAnswers();
// 	var questionAnswerBox = document.getElementById("questionAnswerBox")
// 	questionAnswerBox.setAttribute("id", "showQuestionAnswerBox");
// 	})
// };




















// var keepScore = function() {
// 	for (var i = 0; i < questionArray.length; i++) {
// 		if (selectedAnswer === questionArray[i].correctAnswer) {
// 			var addPoint = 1;
// 			scoreKeeper.push(addPoint);
// 			var p1Score = document.createElement("div");
// 			var p1ScoreSum = scoreKeeper.reduce(function add(previous, current) {
// 				return current + previous;
// 			});
// 			p1Score.textContent = p1ScoreSum;
// 			var p1Scoreboard = document.getElementById("player1Score");
// 			p1Scoreboard.appendChild(p1Score);
// 		} else {
// 			var noPoint = 0;
// 			scoreKeeper.push(noPoint);
// 			var p1Score = document.createElement("div");
// 			var p1ScoreSum = scoreKeeper.reduce(function add(previous, current) {
// 				return current + previous;
// 			});
// 			p1Score.textContent = p1ScoreSum;
// 			var p1Scoreboard = document.getElementById("player1Score");
// 			p1Scoreboard.appendChild(p1Score);
// 		}
// 	}
// };



// var displayAnswer = function() {
// 	for (var i = 0; i < questionArray.length; i++) {
// 		if (selectedAnswer === questionArray[i].correctAnswer) {
// 			var correct = document.createElement("div");
// 			correct.textContent = "You are correct!";
// 			var displayAnswer = document.getElementById("answerDisplay");
// 			displayAnswer.appendChild(correct);
// 			displayAnswer.setAttribute("id", "answerDisplayCorrect");
// 			var nextQuestionButton = document.getElementById("nextQuestion");
// 			nextQuestionButton.setAttribute("id", "show");
// 		} else {
// 			var incorrect = document.createElement("div");
// 			incorrect.textContent = "The correct answer is " + questionArray[i].correctAnswer;
// 			console.log(incorrect);
// 			var displayAnswer = document.getElementById("answerDisplay");
// 			console.log(displayAnswer);
// 			displayAnswer.appendChild(incorrect);
// 			displayAnswer.setAttribute("id", "answerDisplayIncorrect");
// 			var nextQuestionButton = document.getElementById("nextQuestion");
// 			nextQuestionButton.setAttribute("id", "show");
// 		}
// 	}
// };








// Code for Later

// function fillBlank () {
// 	this.question = question;
// 	When user types an answer into text field, if it matches a correct answer, the answer populates the correct cell
// 	I would like to allow for the possibility of an indefinite amount of parameters which then create cells for each answer
// }


// Discarded Code

// var checkAnswer = function() {
// 		console.log(selectedAnswer);
// 		for (var i = 0; i < questionArray.length; i++) {
// 			console.log(questionArray[i]);
// 		if (selectedAnswer === questionArray[i].correctAnswer) {
// 			alert("You are correct!");
// 		} else {
// 			alert("You have chosen poorly.");
// 			// display correct answer
// 		}
// 	}
// };



