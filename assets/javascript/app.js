function checkQs(className){
  var qs = document.getElementsByName(className);
  var noOfRadios = qs.length;
  for (var i = 0; i < noOfRadios; i++) {
	if (qs[i].checked) {
	  if(qs[i].value=="correct") {
	    score ++;	
	    quiz.answerBox.value="Well Done!"	
	  } else {
	  	quiz.answerBox.value="Wrong!";
	  }
	  return;
	}
  } 
}

function showQ(id) {
  var q = document.getElementById(id);
  if(!q) { return }
  q.style.display = "block";
}

function start() {
	showQ(questions[0]);
	setTimer();
}

function reset() {
	// Reset the game
	location.href = location.href;
}

function displayResults() {
	// Show the user's score.
	var scoreBoard = document.getElementById('scoreBoard');
	scoreBoard.innerHTML = "You've gotten " + score + " questions right out of " + questions.length;
}

function setTimer() {
 
  setTimeout(function(){ 
  	timeLeft = timeLeft - 1;
  	document.getElementById('timeLeft').innerHTML = timeLeft;
  	if(timeLeft == 0) {
  	  reset();
  	}
  	if(questionIndex == questions.length) {
  	  return;
  	}
  	setTimer(); 	
  }, 1000);
}

var questions = ["q1", "q2", "q3"];
var questionIndex = 0;
var timeLeft = 30;
var score = 0;

document.getElementById('submit').addEventListener('click', function() {
	// Function will run whenever submit is clicked
	checkQs( questions[questionIndex] );
	displayResults();
	questionIndex ++;
	showQ( questions[questionIndex ]);
	if(questionIndex == questions.length) {
		this.value = "Reset";
		this.addEventListener('click', function() {
		  // Reset
		  reset();
		});
	}
});