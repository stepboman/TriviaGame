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

/*

	var trivia = {

		questions: ['Which company built the ill-fated Comet?
',

								'Which of the following does not belong?',

								'Who was primarily responsible for the design and development of the Constellation?',

								'Which Convair model was the company's last entry in the commercial airliner market?',

								'Which passenger plane was never used as Air Force One?',

								'For which of the following is the colloquial term "jumbo jet" often used?',

								'What was the designation of the four-engine jet airliner being produced by Airbus prior to the A380?',

								'Before Boeing introduced its long-haul 747-400 series, a smaller version of the 747 was built that had a range of almost 7,000 miles. What was the designation of this popular 'mini-jumbo'?
',

								'During the 1950s turboprop aircraft made up a large portion of the commercial airliner fleet. Which of the following was not a turboprop?',

								'What was the designation of the airplane built by Boeing for service in the fabled Clipper fleet?'],

		q1: ['A. Hawker Siddely',

				 'B. Vickers',

				 'C. Handley Page',

				 'D. De Havelland'],

		q2: ['A. DC-4',

				 'B. DC-5',

				 'C. DC-6',

				 'D. DC-7'],

		q3: ['A. Howard Hughes',

				 'B. Glenn Martin',

				 'C. Malcolm Loughhead',

				 'D. Juan Trippe'],

		q4: ['A. 340',

				 'B. 880',

				 'C. 990',

				 'D. 240'],

		q5: ['A. Douglas DC-6',

				 'B. Boeing 707',

				 'C. Lockheed Constellation',

				 'D. Douglas DC-7'],

		q6: ['A. Boeing 747',

				 'B. Lockheed L-1011',

				 'C. McDonnell Douglas MD-11',

				 'D. Douglas DC-10'],

		q7: ['A. A-340',

				 'B. A-350',

				 'C. A-320',

				 'D. A-321'],

		q8: ['A. 747-250',

				 'B. 747-SB',

				 'C. 747-SP',

				 'D. 747-200'],

		q9: ['A. Martin 404',

				 'B. Vickers Viscount',

				 'C. Lockheed Electra II',

				 'D. Bristol Brittania'],

		q10: ['A. 307',

				  'B. 314',

				  'C. 377',

				  'D. 214']		 						

	}

*/

var correct = 0;

var wrong = 0;

var q1 = {

	question : 'Which company built the ill fated Comet?',

	possibleAnswers : ['A. Hawker Siddeley',

				 'B. Vickers',

				 'C. Handley Page',

				 'D. De Havelland'],

	flags : [false, false, false, true],

	answer : 'D. De Havelland'

};



var q2 = {

	question: 'Which of the following does not belong?',

	possibleAnswers: ['A. DC-4',

				 'B. DC-5',

				 'C. DC-6',

				 'D. DC-7'],

	flags : [false, true, false, false],

	answer : 'B. DC-5'

};



var q3 = {

	question : 'Who was primarily responsible for the design and development of the Constellation?',

	possibleAnswers : ['A. Howard Hughes',

	'B. Glenn Martin',

	'C. Malcolm Loughhead',

	'D. Juan Trippe'],

	flags : [true, false, false, false],

	answer : 'A. Howard Hughes'

};



var q4 = {

	question : 'Which Convair model was the companys last entry in the commercial airliner market?',

	possibleAnswers : ['A. 340',

	'B. 880',

	'C. 990',

	'D. 240'],

	flags : [false, false, true, false],

	answer : 'C. 990'

};



var q5 = {

	question : 'Which passenger plane was never used as Air Force One?',

	possibleAnswers : ['A. Douglas DC-6',

	'B. Boeing 707',

	'C. Lockheed Constellation',

	'D. Douglas DC-7'],

	flags : [false, false, false, true],

	answer : 'D. Douglas DC-7'

};



var q6 = {

	question : 'For which of the following is the colloquial term "jumbo jet" often used?',

	possibleAnswers : ['A. Boeing 747',

	'B. Lockheed L-1011',

	'C. McDonnell Douglas MD-11',

	'D. Douglas DC-10'],
	flags : [true, false, false, false],

	answer : 'A. Boeing 747'

};



var q7 = {

	question : 'What was the designation of the four-engine jet airliner being produced by Airbus prior to the A380?',

	possibleAnswers : ['A. A-340',

	'B. A-350',

	'C. A-320',

	'D. A-321'],

	flags : [true, false, false, false],

	answer : 'A. A-340'

};



var q8 = {

	question : 'Before Boeing introduced its long-haul 747-400 series, a smaller version of the 747 was built that had a range of almost 7,000 miles. What was the designation of this popular mini-jumbo?',
	

	possibleAnswers : ['A. 747-250',

	'B. 747-SB',

	'C. 747-SP',

	'D. 747-200'],
	flags : [false, false, true, false],

	answer : 'C. 747-SP'

};



var q9 = {

	question : 'During the 1950s turboprop aircraft made up a large portion of the commercial airliner fleet. Which of the following was not a turboprop?',

	possibleAnswers : ['A. Martin 404',

	'B. Vickers Viscount',

	'C. Lockheed Electra II',

	'D. Bristol Brittania'],

	flags : [true, false, false, false],

	answer : 'A. Martin 404'

};



var q10 = {

	question : 'What was the designation of the airplane built by Boeing for service in the fabled Clipper fleet?',

	possibleAnswers : ['A. 307',

	'B. 314',

	'C. 377',

	'D. 214'],	

	flags : [false, true, false, false],

	answer : 'B. 314'

}



var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];



function loadQuestion(questionSelection) {

	console.log(questionSelection);

	countdownTimer.reset();

  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");

  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();

  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();

  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();

  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

//  getAnswer();  

//  nextQuestion(index);

}



//function nextQuestion() {

//	index = index++;

//	console.log(index);

//}



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

//		for (var i=0; i<questionArray.length; i++) {

//			$('.question').append('<p>'+questionArray[i].question+'</p>');

//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {

//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');

//			}

//			$('#possibleAnswers').on('click', function() {





//		console.log("click");

//		countdownTimer.start();

//		for (var i = 0; i < questionArray.length; i++) {

//			console.log(i);



//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');

//			$('.question').html(questionArray[i].question);

//			while (countdownTimer != 0) {



//			}

		

//	});

//	$('#startButton').click(countdownTimer.start);



//}

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





//	$('#start').click(countdownTimer.start);

});