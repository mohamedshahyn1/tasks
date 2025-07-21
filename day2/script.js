////task1
var message = prompt("PLZ ENTER TEXT");
var l= prompt("PLZ ENTER letter");
  var result = [];

 for (var i = 0; i < message.length; i++) {
    if (sentence[i].toLowerCase() === letter.toLowerCase()) {
         result.push(i);
    }
  }
 console.log(result)

////task2

 do{
  var number = prompt("PLZ ENTER num");
 }
 while(isNaN(number));
 function divided(number){

  if (number % 3 == 0 && number % 5 == 0) {
      alert("fizz buzz");
    } else if (number % 3 == 0 && number % 5 != 0) {
      alert("fizz");
    } else if (number % 5 === 0 && number % 3 != 0 ) {
      alert("buzz");
    } else {
      alert("none");
    }
    }


    ////task3
  var arr = [];
    for (var i = 0; i < 3; i++) {
     var value = parseInt(prompt("Enter value"  + (i + 1)));
      arr.push(value); 
    }
    function getSum(arr) {
      return arr[0] + arr[1] + arr[2];
    }

    function getProduct(arr) {
      return arr[0] * arr[1] * arr[2];
    }

    function getDivision(arr) {
      return arr[0] / arr[1] / arr[2];
    }

    document.innerHTML("<p><b>Sum:</b> " + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + getSum(arr) + "</p>");
    document.innerHTML("<p><b>Product:</b> " + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + getProduct(arr) + "</p>");
    document.innerHTML("<p><b>Division:</b> " + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + getDivision(arr).toFixed(2) + "</p>");



    
    ////task4


    var numbers = [];
    for (var i = 0; i < 5; i++) {
      var value = parseInt(prompt("Enter value"  + (i + 1)));
     numbers.push(value); 
    }

     document.innerHTML("ve entered the values of ");
      for (var i = 0; i < numbers.length; i++) {
        document.innerHTML(numbers[i] + " ");
      }

 var desc = [...numbers].sort(function(a, b) {
        return b - a;
      });

       document.innerHTML("ur values after being sorted descending ");
      for (var i = 0; i < desc.length; i++) {
        document.innerHTML(desc[i] + " ");
      }

var desc = [...numbers].sort(function(a, b) {
        return a - b;
      });

       document.innerHTML("ur values after being sorted descending ");
      for (var i = 0; i < desc.length; i++) {
        document.innerHTML(desc[i] + " ");
      }
