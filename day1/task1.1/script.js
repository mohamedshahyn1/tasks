var message = prompt("PLZ ENTER TEXT");

for (var i = 1; i <= 6; i++) {
  let heading = document.innerText(`h${i}`);
  heading.innerText = message;
  document.writeln(heading);
}
console.log(message);