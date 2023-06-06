var inputWord = "nasaktan";
var result = attendance(inputWord.toLowerCase());
console.log(result);

function attendance(input) {
  if (input == "minahal" || input == "nagmahal" || input == "nasaktan") {
    return "present";
  } else {
    return "absent";
  }
}
