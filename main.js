

document.addEventListener("DOMContentLoaded", function() {
    getProducts();
    function getProducts() {
      let url = "https://fakestoreapi.com/products";
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        url,
        true
      );
      xhr.onload = function() {
        if(this.status == 200) {
          let result = JSON.parse(this.responseText);
          outputProducts(result);
        }
      }
      xhr.send();
    }
  
    function outputProducts(products) {
      let productsdiv = document.querySelector(".products");
      console.log(products);
      let output = "";
      for (let i = 0; i < 4; i++) {
          output += `
          <div class="col-md-3">
              <img src="${products[i].image}" alt="">
              <h3>${products[i].price}</h3>
              <p>${products[i].title}</p>
          </div>`;
          
      } 
      productsdiv.innerHTML = output;
    }
  })
  