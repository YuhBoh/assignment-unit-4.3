console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = [];

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
    for (i=0; i<basket.length; i++) {
      basket.pop();
    }
      console.log(basket);     
  }

console.log(empty());
console.log(`Basket is now ${basket}`);

// STRETCH GOALS //
//1.//
console.log("1.");
const maxItems = 5;

//2.//
console.log("2.");
basket = ["1 book", "2 banaynays", "3 banyaners", "4 banahnah", "5 bonanza"];
function isFull(){
  if (basket.length < maxItems){
    return false;
  }
  else {
    return true;
  }
}
console.log(isFull());

basket = ["1 book", "2 banaynays", "3 banyaners", "4 banahnah"];
function isFull(){
  if (basket.length < maxItems){
    return false;
  }
  else {
    return true;
  }
}
console.log(isFull());


//3.//
console.log("3.");
basket = [];
function addItem2(item2) {
  if (!isFull()) {
    basket.push(item2);
    return true; 
  }
  else {
    return false;
  }
}

console.log(addItem2("1 book"));
console.log(addItem2("2 banaynays"));
console.log(addItem2("3 banyaners"));
console.log(addItem2("4 banahnah"));
console.log(addItem2("5 bonanza"));
console.log(addItem2("6 death"));
console.log(basket);

//4.//
console.log("4.");
basket = ["1 book", "2 banaynays", "3 banyaners"];
function removeItem(item){
  let i = basket.indexOf(item)
    if (item === basket[i]){
      basket.splice(i, 1);
      return item;
    }
    return null;
  }

console.log(removeItem("dog"));
console.log(removeItem("1 book"));
console.log(basket);