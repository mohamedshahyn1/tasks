  var textBox = document.getElementById("textBox");
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  var green = document.getElementById("green");

  function changeColor() {
    var value = parseInt(textBox.value);

    if (isNaN(value) || value < 1 || value > 3) {
      textBox.value = "";
      textBox.placeholder = "من فضلك أدخل رقم من 1 لـ 3";
      return;
    }

    red.style.backgroundColor = "gray";
    yellow.style.backgroundColor = "gray";
    green.style.backgroundColor = "gray";

    if (value == 1) {
      red.style.backgroundColor = "red";
    } else if (value == 2) {
      yellow.style.backgroundColor = "yellow";
    } else if (value == 3) {
      green.style.backgroundColor = "green";
    }
  }