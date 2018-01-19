$( document ).ready(function() {

  var intervalId;
  var clockRunning = false;
  //this is the amount of time the player has to answer all questions
  var time = 10;
  var currentQuestion = 0;
  var numCorrect = 0;
  var numIncorrect = 0;

  var triviaQuestions = [{
  //player can select only one answer
    question : "what color is the sky?",
    answers : ["blue", "red", "green", "purple"],
    answerCorrect : "blue"
  }, {
    question : "what is the fourth planet from the sun?",
    answers : ["mars", "mercury", "jupiter", "earth"],
    answerCorrect : "mars"
  }, {
    question : "Who was the third president of the United States?",
    answers : ["Jefferson", "Washington", "Lincoln", "Franklin"],
    answerCorrect : "Jefferson"
  }, {
    question : "The author of Call of the Wild?",
    answers : ["Jack London", "Robert Frost", "Harper Lee", "Lewis Carroll"],
    answerCorrect : "Jack London"
  }];

  console.log( "ready!" ); //breakpoint
  var questionsDiv = $("#questions");
  var timeLeft = $("#time-left");
  timeLeft.html("<h2> Time Left: " + time + "</h2>");

  $("#start").on("click", start);
  function start () {
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    var thisQuestion = "";
    for ( i = 0; i < triviaQuestions.length; i++ ) {
      thisQuestion = triviaQuestions[i];
      questionsDiv.append("<p>" + thisQuestion.question + "</p> <form>");
      for ( j = 0; j < thisQuestion.answers.length; j++ ) {
        questionsDiv.append("<input type='radio' class='radioButton' value=" + i + " name = " + i + " id='" + thisQuestion.answers[j] + "'> ");
        questionsDiv.append(thisQuestion.answers[j]);
        questionsDiv.append("<br><br>");
      }
    }
    $("#start").hide();
  }

  $( document ).on('click', '.radioButton' ,function(){
    let guess = $(this).attr("id");
    let correctGuess = $(this).attr("value");
    thisQuestion = triviaQuestions[correctGuess];
    if ( thisQuestion.answerCorrect === guess ) {
      numCorrect++
    } else if (  thisQuestion.answerCorrect !== guess ) {
      numIncorrect++
    }
    console.log(correctGuess);
    console.log(guess);
    console.log(thisQuestion.answerCorrect);
  });

  function decrement () {
    if ( clockRunning === true ) {
      time--;
      timeLeft.html("<h2> Time Left: " + time + "</h2>");
      if (time === 0 ) {
        clockRunning = false;
        questionsDiv.html("<h2> Time's Up!! </h2>");
        questionsDiv.append("<p> Correct Answers: " + numCorrect + "</p>");
        questionsDiv.append("<p> Incorrect Answers: " + numIncorrect + "</p>");
        timeLeft.append("<button id='retry'>Try Again</button>");
        clearInterval(intervalId);
      }
    }
  }

  $( document ).on("click", "#retry", function() {
    questionsDiv.empty();
    time = 10;
    timeLeft.html("<h2> Time Left: " + time + "</h2>");
    currentQuestion = 0;
    numCorrect = 0;
    numIncorrect = 0;
    start()
  });
});
