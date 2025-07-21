var sum = 0;

  while (true) {
var input = prompt("plz Enter Num");

    if (isNaN(input)) {
      alert(" not a number, try again.");
      continue;
    }

 var num = Number(input);

    if (num === 0 || sum + num > 100) {
      break;
    }

    sum += num;
  }

  alert("sum =  " + sum);