const cart = ["kurta", "pyjama", "pants"];

const promise = createOrder(cart);

promise.then(function() {
  proceedToPayment(orderID)
});

//constructing promise

function createOrder(cart) {

  const pr = new Promise(function(resolve,reject){

     if(!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err)
     };
     //logic for createOrder

     

  })

return pr;
}

