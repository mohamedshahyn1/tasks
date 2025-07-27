var PrductNameInput = document.getElementById("PrductName");
var PrductPriceInput = document.getElementById("PrductPrice");
var PrductCategoryInput = document.getElementById("PrductCategory");
var PrductDetailsInput = document.getElementById("PrductDetails");
var searchInput = document.getElementById("searchInput");
var currentindex = 0;
var addbtn = document.getElementById("addbtn");
var inputs = document.getElementsByClassName("form-control");
var products = [];
if (JSON.parse(localStorage.getItem("productslist")) != null) {
  products = JSON.parse(localStorage.getItem("productslist"));
  displayProduct();
}

addbtn.onclick = function () {
  if (addbtn.innerHTML == "add product") {
    addProduct();
  } else {
    updateProduct();
  }
  displayProduct();
  clearForm();
};
function addProduct() {
  var product = {
    name: PrductNameInput.value,
    price: PrductPriceInput.value,
    category: PrductCategoryInput.value,
    deta: PrductDetailsInput.value,
  };
  products.push(product);
  localStorage.setItem("productslist", JSON.stringify(products));
}

function displayProduct() {
  var cartona = "";
  for (var i = 0; i < products.length; i++) {
    cartona += `<tr>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                  <td>${products[i].category}</td>
                <td>${products[i].deta}</td>
                   <td><button type="button" Update onclick="getProductInfo(${i})"  class="btn btn-warning">Update</button></td>
                      <td><button type="button" onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
                  </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}
function deleteproduct(index) {
  products.splice(index, 1);
  displayProduct();
  localStorage.setItem("productslist", JSON.stringify(products));
}
function clearForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
searchInput.onkeyup = function () {
  var cartona = "";
  for (var i = 0; i < products.length; i++) {
    if (
      products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      cartona += `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
          <td>${products[i].category}</td>
        <td>${products[i].deta}</td>
                   <td><button type="button" Update onclick=" getProductInfo(${i})"  class="btn btn-warning">Update</button></td>
              <td><button type="button" onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
          </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML = cartona;
};
function getProductInfo(index) {
  currentindex = index;
  var currentproduct = products[index];
  PrductNameInput.value = currentproduct.name;
  PrductPriceInput.value = currentproduct.price;
  PrductCategoryInput.value = currentproduct.category;
  PrductDetailsInput.value = currentproduct.deta;
  addbtn.innerHTML = "Update product";
}
function updateProduct() {
  var product = {
    name: PrductNameInput.value,
    price: PrductPriceInput.value,
    category: PrductCategoryInput.value,
    deta: PrductDetailsInput.value,
  };
  products[currentindex] = product;
  localStorage.setItem("productslist", JSON.stringify(products));
  addbtn.innerHTML = "add product";
}
