var userInput = prompt("Enter a string:");

var count = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === 'e') {
      count++;
    }
  }

  alert("Number of 'e' characters: " + count);