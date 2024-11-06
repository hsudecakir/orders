const products = ['Elma', 'Armut', 'Kavun', 'Çilek', 'Karpuz', 'Kiraz'];
const orders = [];


function init(){
  const productBtnsContainer = document.querySelector('.product-buttons-container');

  for (const product of products) {
    productBtnsContainer.innerHTML += `<div class="product-buttons">${product}</div>`;
  }

  const productBtns = document.querySelectorAll('.product-buttons');

  for (const productBtn of productBtns) {
    productBtn.addEventListener('click', writeOrders);
  }
}

function writeOrders(){

  const existingProduct = orders.findIndex(order => order.productName == this.innerText);

  if(existingProduct > -1){
    orders[existingProduct].piece = orders[existingProduct].piece + 1;
  } else{
    orders.push({
      productName: this.innerText,
      piece: 1
    });
  }
  ordersList.innerHTML = '';
    for (const order of orders) {
      ordersList.innerHTML += `<li>${order.productName} x ${order.piece}</li>`;
    }
}


init();
