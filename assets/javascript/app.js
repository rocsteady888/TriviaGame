$( document ).ready(function() {

  var intervalId;
  var clockRunning = false;

  console.log( "ready!" );

  $("#start").on("click", function start(){
    time = 2;
    
    console.log("start game");
    if (!clockRunning) {
          intervalId = setInterval(countDown.count, -1000);
          clockRunning = true;
    }

  });

});
//press start button
//starts a timer
//shows questions
//show possible answers
//each questions can only have 1 answer
//when timer ends the game is over
//display the number of correct and incorrect answers
//give option to play again

// setTimeout(timeUp, 1000 * 15);

// function fiveSeconds() {
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function timeUp() {
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
// }


//   $("#start").on("click", countDown.start);

// //runs the count down clock
// var intervalId;

// //prevents the clock from being sped up unnecessarily
// var clockRunning = false;

// var countDown = {

//   start: function() {

//     // DONE: Use setInterval to start the count here and set the clock to running.
//     if (!clockRunning) {
//         intervalId = setInterval(countDown.count, -1000);
//         clockRunning = true;
//     }
//   },
//   count: function() {

//     // DONE: increment time by 1, remember we cant use "this" here.
//     countDown.time++;

//     // DONE: Get the current time, pass that into the countDown.timeConverter function,
//     //       and save the result in a variable.
//     var converted = countDown.timeConverter(countDown.time);
//     console.log(converted);

//     // DONE: Use the variable we just created to show the converted time in the "display" div.
//     $("#display").text(converted);
//   },
//   timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   },
//   playAgain: function() {

//     countDown.time = 0;

//     //change the "display" div to "00:00."
//     $("#display").text("00:00");
//   }