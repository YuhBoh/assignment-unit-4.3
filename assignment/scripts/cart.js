console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = ["banaynays", "bananyas"];

// 1st Part //
function addItem(item) {
  basket.push(item);
  if (basket.length > basket.length - 1){
   return true; 
  }
}

console.log(`Basket is ${basket}`);
console.log('Adding book (expect true)', addItem('book'));
console.log(`Basket is now ${basket}`);

// 2nd Part //
  function listItems() {
    for (i=0; i<basket.length; i++){
      console.log(basket[i]);
    }
  }
  console.log(`Basket is now ${basket}`);

  listItems();

  // 3rd part //
  function empty() {
    for (i=basket.length; i=basket.length; i--) {
      basket.pop(i);
    }
      console.log(basket);     
  }

console.log(empty());
console.log(`Basket is now ${basket}`);