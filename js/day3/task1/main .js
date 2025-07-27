function processNumbers() {
var input = document.getElementById("numbers").value;
var arr = input.split(",").map(Number);
  var uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
}

var secondMin = uniqueArr[1];
var secondMax = uniqueArr[uniqueArr.length - 2];

  document.getElementById("secondMin").value = secondMin;
  document.getElementById("secondMax").value = secondMax;