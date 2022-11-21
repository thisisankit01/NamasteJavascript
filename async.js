const cart = ["books","kitaab","socialLife"];

async function ecommerce(cart){
  createOrder(cart)
  await ( function (orderID) {
    return proceedToPayment(orderID)
  })
  await ( function (paymentInfo){
    return showOrderSummary(paymentInfo)
  })
  await (function (paymentInfo){
    return updateWalletBalance(paymentInfo)
  });
}