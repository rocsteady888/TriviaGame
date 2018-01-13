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
        questionsDiv.append("<input type='radio' class='radioButton' value=" + i + " name = " + i + " id= " + thisQuestion.answers[j] + "> ");
        questionsDiv.append(thisQuestion.answers[j]);
        questionsDiv.append("<br><br>");
      }
    }
    $(".radioButton").on("click", function () {
        console.log("clicked");
        value = $("input[type='radio']:checked").val();
        answer = $(this).attr("id");
        correctAnswer = $(triviaQuestions[value].answerCorrect);
        console.log(value);
        console.log(answer);
        console.log(triviaQuestions[value].answerCorrect);
        if ( answer == correctAnswer ) {
            numCorrect++;
            console.log(numCorrect);
        } else if ( answer!= correctAnswer ) {
          numIncorrect++;
          console.log(numIncorrect);
        }
    });
    $("#start").hide();
  }

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
});
