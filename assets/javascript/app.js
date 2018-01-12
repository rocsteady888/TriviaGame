$( document ).ready(function() {

  var intervalId;
  var clockRunning = false;
  var time= 8;
  var timeLeft = $("#time-left");

  console.log( "ready!" );

  timeLeft.html("<h1> Time Left: " + time + "</h1>");
  $("#start").on("click", start);

  function start () {
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    $("#start").hide();
  }

  function decrement () {
    if ( clockRunning === true ) {
      time--;
      timeLeft.html("<h1> Time Left: " + time + "</h1>");
      if (time === 0 ) {
        clockRunning = false;
        timeLeft.html("<h1> Time's Up!! </h1>");
        timeLeft.append("<button id='retry'>Try Again</button>");
        clearInterval(intervalId);
      }
    }
  }
});
//press start button
//starts a timer
//shows questions
//show possible answers
//each questions can only have 1 answer
//when timer ends the game is over
//display the number of correct and incorrect answers
//give option to play again
