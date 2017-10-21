$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who directed There Will Be Blood?',
	possibleAnswers : ['A. Steven Spielberg',
				 'B. Paul Thomas Anderson',
				 'C. Francis Coppola',
				 'D. M. Night Shyamalan'],
	flags : [false, true, false, false],
	answer : 'B. Paul Thomas Anderson'
};

var q2 = {
	question: 'Who starred in There Will Be Blood?',
	possibleAnswers: ['A. Tom Hanks',
				 'B. Tom Cruise',
				 'C. Daniel Day Lewis',
				 'D. Michael Keaton'],
	flags : [false, false, true, false],
	answer : 'C. Daniel Day Lewis'
};

var q3 = {
	question : 'What was the name of the priest in There Will Be Blood?',
	possibleAnswers : ['A. Eli',
				 'B. Francis',
				 'C. Jed',
				 'D. Kyle'],
	flags : [true, false, false, false],
	answer : 'A. Eli'
};

var q4 = {
	question : 'Who wrote the soundtrack to There Will Be Blood?',
	possibleAnswers : ['A. John Greenwood',
				 'B. Nigel Godrich',
				 'C. Jack White',
				 'D. Thom Yorke'],
	flags : [true, false, false, false],
	answer : 'A. John Greenwood'
};

var q5 = {
	question : 'What was the main character digging for in There Will Be Blood?',
	possibleAnswers : ['A. Gold',
				 'B. Silver',
				 'C. Diamonds',
				 'D. Oil'],
	flags : [false, false, false, true],
	answer : 'D. Oil'
};

var q6 = {
	question : 'What was the name of Daniel Plainviews son in There Will be Blood',
	possibleAnswers : ['A. DJ',
				 'B. AJ',
				 'C. HW',
				 'D. JT'],
	flags : [false, false, true, false],
	answer : 'C. HW'
};

var q7 = {
	question : 'Who was Daniel Plainview biggest competion in There Will Be Blood?',
	possibleAnswers : ['A. Johnson',
				 'B. Gersh',
				 'C. PT',
				 'D. Union'],
	flags : [false, false, false, true],
	answer : 'D. Union'
};

var q8 = {
	question : 'Where does There Will Be Blood take place?',
	possibleAnswers : ['A. Arizona',
				 'B. Texas',
				 'C. California',
				 'D. New Mexico'],
	flags : [false, false, true, false],
	answer : 'C. California'
};



var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 }
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});
