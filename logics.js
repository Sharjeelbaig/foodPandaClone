

var cartItems = [];
var totalPrice = 0;

/*logic for adding to cart*/
function addToCart(productIndex,price){
  totalPrice +=price;
  document.getElementById('totalPrice').innerHTML = 'PKR '+totalPrice;
  $.get("https://sga.technologiasolutions.com/api/Product/GetAll/1", function(data, status){
   
   var Data = JSON.parse(data);
  var cart = document.getElementById("Cart");
  var productDiv =document.createElement("DIV");
  var product = Data[productIndex].product_name;
  var productId = Data[productIndex].product_id;
  var productColor = Data[productIndex].product_color;
  productDiv.id='product'+productId;
  productAmountH3=document.createElement("H3");
  productAmountH3.id= 'productAmount'+productId;

  
//adding logic
if (cartItems.find(function(check){return check == product})) {
 //amount++
var amount = parseInt(document.getElementById('productAmount'+productId).innerHTML);
document.getElementById('productAmount'+productId).innerHTML = amount+1;


} else {

 cartItems.push(Data[productIndex].product_name);
cart.appendChild(productDiv);

   //productDiv Inner
productDiv.innerHTML= product+' in '+productColor+' color ';
productDiv.appendChild(productAmountH3);
document.getElementById('productAmount'+productId).innerHTML='1';

}   
  });
};

/*end of this logic*/

 



