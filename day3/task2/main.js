function toTitleCase() {
    var input = document.getElementById("str").value;
    var result  = input.toLowerCase()                   
    .split(" ")                      
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  document.getElementById("textConvert").value = result;
  
}