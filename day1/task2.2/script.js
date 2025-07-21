let str = prompt("ُenter text");
let caseSensitive = confirm("Do you want to reach him?");

if (!caseSensitive) {
  str = str.toLowerCase();
}

let reversed = str.split("").reverse().join("");

if (str === reversed) {
  alert("Palindrome");
} else {
  alert(" no Palindrome");
}