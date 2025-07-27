function calc() {
  var tagName = document.getElementById("textBox1").value.trim();
  var className = document.getElementById("textBox2").value.trim();
  var idName = document.getElementById("textBox3").value.trim();
  var nameAttr = document.getElementById("textBox4").value.trim();

  var count = 0;

  if (tagName !== "") {
    count += document.getElementsByTagName(tagName).length;
  }

  if (className !== "") {
    count += document.getElementsByClassName(className).length;
  }

  if (idName !== "") {
    count += document.querySelectorAll("#" + idName).length;
  }

  if (nameAttr !== "") {
    count += document.getElementsByName(nameAttr).length;
  }

  document.getElementById("output").value = "Total Matches: " + count;
}
