


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



var pingPong = function(userInput) {
	if (userInput % 15 === 0) {
		return "Ping-Pong";
    }
	else if (userInput % 3 === 0) {
		return "Ping";
    }
	else if (userInput % 5 === 0) {
		return "Pong";
    }
	else {
		return userInput;
    }
};











// User interface logic:

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("input#numberInput").val());
      var output = pingPong(userInput);



      // makeIndWordArrays (englishInput);
      // for (var b=0;b<masterArray.length;b++) {
      //   makeIndCharacterArray (masterArray[b]);
      //   translateString (inputArray);
      //   rejoinCharacterArray (inputArray);
      // };

      $("#results").append("<li>" + output + "</li>");
      $(".results").show();

  });
});





// var pingPong = function(userInput) {
// 	if (userInput % 15 === 0) {
// 		return "Ping-Pong";
//     }
// 	else if (userInput % 3 === 0) {
// 		return "Ping";
//     }
// 	else if (userInput % 5 === 0) {
// 		return "Pong";
//     }
// 	else {
// 		return userInput;
//     }
// };
//
//
//
//
//
//
//
//
//
//
//
// // User interface logic:
//
// $(document).ready(function() {
//   $("#numberForm").submit(function(event) {
//       event.preventDefault();
//       var userInput = parseInt($("input#numberInput").val());
//       var output = pingPong(userInput);
//
//
//
//       // makeIndWordArrays (englishInput);
//       // for (var b=0;b<masterArray.length;b++) {
//       //   makeIndCharacterArray (masterArray[b]);
//       //   translateString (inputArray);
//       //   rejoinCharacterArray (inputArray);
//       // };
//
//       $("#results").append("<li>" + output + "</li>");
//       $(".results").show();
//
//   });
// });
