


// Description:
// - The users inputted number is taken and parsed, value collected.
// - We need one "for" loop to run through and output numbers one at a time until the index value = whatever number the user inputs.
// - Each pass (each number) is saved into a variable and outputted to the .results section.
// - If the # saved in the variable is % 3 === 0: then save "ping" to variable and output this string.
// - If the # saved in the variable is % 5 === 0: then save "pong" to the variable and output this string.
// - If the # saved in the variable is % 15 === 0: then save "ping-pong" to the variable and output this string.
//
// - The loop will end when it hits the number inputted by the user.

// Business logic:


// var output = [];
//
// var numLoop = function(userInput) {
//   for(index=0; index<userInput;index++) {
//       return index;
//   }
//   console.log();
// };
//

// var numLoop = function(userInput) {
//   for(index=0; index<userInput;index++) {
//   pingPong(index);
//   console.log(index);
//   }
// };
//
// var pingPong = function(userInput) {
// 	if (userInput % 15 === 0) {
// 		console.log("Ping-Pong");
//     }
// 	else if (userInput % 3 === 0) {
// 		console.log("Ping");
//     }
// 	else if (userInput % 5 === 0) {
// 		console.log("Pong");
//     }
// 	else {
// 		console.log(index);
//     }
// };
//


var index;

var numLoop = function(userInput) {
  for(index=1; index <= userInput; index++) {
  pingPong(index);
  }
};

var pingPong = function(userInput) {
	if (index % 15 === 0) {
		console.log("Ping Pong");
    }
	else if (index % 3 === 0) {
		console.log("Ping");
    }
	else if (index % 5 === 0) {
		console.log("Pong");
    }
	else {
		console.log(index);
    }
};






// User interface logic:

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("input#numberInput").val());
      numLoop(userInput);
      // $("#results").append("<li>" + output + "</li>");
      $(".results").show();

  });
});
