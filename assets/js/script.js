const products = [{
  productName: 'Elma',
  productPrice: 20,
  piece: 1
},
{
  productName: 'Armut',
  productPrice: 25,
  piece: 1
},
{
  productName: 'Erik',
  productPrice: 40,
  piece: 1
},
{
  productName: 'Çilek',
  productPrice: 50,
  piece: 1
},
{
  productName: 'Kivi',
  productPrice: 100,
  piece: 1
},
{
  productName: 'Kiraz',
  productPrice: 65,
  piece: 1
}];

let orders = [];


function init(){
  const productBtnsContainer = document.querySelector('.product-buttons-container');

  for (const product of products) {
    productBtnsContainer.innerHTML += `<div class="product-buttons">${product.productName}</div>`;
  }

  const productBtns = document.querySelectorAll('.product-buttons');

  for (const productBtn of productBtns) {
    productBtn.addEventListener('click', writeOrders);
  }
}

function writeOrders(){

  const selectedProduct = products.find(order => order.productName == this.innerText);

  if(!(orders.includes(selectedProduct))){
    orders.push(selectedProduct);
  } else {
    selectedProduct.piece = selectedProduct.piece + 1;
  }
  ordersList.innerHTML = '';
  let totalPrice = 0;
  for (const order of orders) {
    ordersList.innerHTML += `<li>${order.productName} x ${order.piece}kg <span>${order.piece * order.productPrice} TL</span></li>`;
    totalPrice += order.productPrice * order.piece;
  }
  totalPriceTxt.innerText = `Toplam sipariş tutarı ${totalPrice} TL`;
}


init();
