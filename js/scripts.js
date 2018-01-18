





$(document).ready(function() {
  $("#userString").submit(function(event) {
    event.preventDefault();
    var userInput = $("#string").val().split(""); // string.split() turns a string into an array
    console.log(userInput);
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var numVowels = 0;
  //every letter in string --> for each --> is it a vowel?

    userInput.forEach(function(character) {
      vowels.forEach(function(vowel) {
        if (character === vowel) {
          numVowels ++;
        // } else {
        //   //do nothing
        };
      });
    });

    $("#showResult").text("There are " + numVowels + " of vowels in your input.");


  });
});
