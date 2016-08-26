//testing each augmented iife with console logs
Sandwich.addMeat("chicken",2.50);
console.log("white",Sandwich.getBreadPrice("white"));
// console.log("added meat: ",Sandwich.getMeat());
Sandwich.addBread("wheatberry",1.85);
// console.log("added bread: ", Sandwich.getBread());
Sandwich.addCheese("swiss",200.00);
// console.log("added cheese: ", Sandwich.getCheese());
// Sandwich.addCondiments("aoli",0.50);
// console.log("added condiments: ", Sandwich.getCondiments());
// Sandwich.addVeggies("jalepeno", 0.75);
// console.log("added veggies: ", Sandwich.getVeggies());

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;




/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// meat
// Get a reference to the <select> element that has all the meat options
var meatSelector = document.getElementById("meatSelector");
 meatSelector.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var price = Sandwich.getMeatPrice(selectedTopping);
  document.getElementById('meatCost').innerHTML += "<li class='price'>$"+price+"</li>";
 // Add the topping to the SandwichMaker to increase the total price
   var toAdd =selectedTopping;
   document.getElementById('meatList').innerHTML += "<li class='ingredient'>"+toAdd+"</li>";  
});


// bread
var breadSelector = document.getElementById('breadSelector');
 breadSelector.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var breadprice = Sandwich.getBreadPrice(selectedTopping);
  document.getElementById('breadCost').innerHTML += "<li>$"+breadprice+"</li>";
   // Add the topping to the SandwichMaker to increase the total price
   var toAdd =selectedTopping;
   document.getElementById('breadList').innerHTML += "<li>"+toAdd+"</li>";
});

// cheese
var cheeseSelector = document.getElementById('cheeseSelector');
 cheeseSelector.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(selectedTopping);
  // Determine the price of the topping chosen
  var price = Sandwich.getCheesePrice(selectedTopping);
  document.getElementById('cheeseCost').innerHTML += "<li>$"+price+"</li>";
 // Add the topping to the SandwichMaker to increase the total price
   var toAdd =selectedTopping;
   document.getElementById('cheeseList').innerHTML += "<li>"+toAdd+"</li>"; 
});

 // veggies
 var veggieSelector = document.getElementById('veggieSelector');
 veggieSelector.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var price = Sandwich.getVeggiePrice(selectedTopping);
  document.getElementById('veggieCost').innerHTML += "<li>$"+price+"</li>";
   // Add the topping to the SandwichMaker to increase the total price
   var toAdd =selectedTopping;
   document.getElementById('veggieList').innerHTML += "<li>"+toAdd+"</li>";
});

 //condiments
 var condimentSelector = document.getElementById('condimentSelector');
 condimentSelector.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var price = Sandwich.getCondimentPrice(selectedTopping);
  document.getElementById('condimentCost').innerHTML += "<li>$"+price+"</li>";
   // Add the topping to the SandwichMaker to increase the total price
   var toAdd =selectedTopping;
   document.getElementById('condimentList').innerHTML += "<li>"+toAdd+"</li>";
});

 //******************Remove Element Functions***********************/
 /******************************************************************/
function removeMeat() {
    var list = document.getElementById("meatList");
    var cost = document.getElementById("meatCost");
    list.removeChild(list.childNodes[0]);
    cost.removeChild(cost.childNodes[0]);
}
/******************************************************************/
function removeBread() {
    var list = document.getElementById("breadList");
    var cost = document.getElementById("breadCost");
    list.removeChild(list.childNodes[0]);
    cost.removeChild(cost.childNodes[0]);
}
function removeCheese() {
    var list = document.getElementById("cheeseList");
    var cost = document.getElementById("cheeseCost");
    list.removeChild(list.childNodes[0]);
    cost.removeChild(cost.childNodes[0]);
}
function removeVeggie() {
    var list = document.getElementById("veggieList");
    var cost = document.getElementById("veggieCost");
    list.removeChild(list.childNodes[0]);
    cost.removeChild(cost.childNodes[0]);
}
function removeCondiment() {
    var list = document.getElementById("condimentList");
    var cost = document.getElementById("condimentCost");
    list.removeChild(list.childNodes[0]);
    cost.removeChild(cost.childNodes[0]);
}