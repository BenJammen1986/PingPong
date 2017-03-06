$(document).ready(function() {
  $("#numberForm").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("input#numberInput").val());



      // makeIndWordArrays (englishInput);
      // for (var b=0;b<masterArray.length;b++) {
      //   makeIndCharacterArray (masterArray[b]);
      //   translateString (inputArray);
      //   rejoinCharacterArray (inputArray);
      // };

      $("#results").append("<li>" + userInput + "</li>");
      $(".results").show();

  });
});
