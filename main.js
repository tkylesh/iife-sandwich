//testing each augmented iife with console logs
Sandwich.addMeat("chicken",2.50);
console.log("added meat: ",Sandwich.getMeat());
Sandwich.addBread("wheatberry",1.85);
console.log("added bread: ", Sandwich.getBread());
Sandwich.addCheese("swiss",200.00);
console.log("added cheese: ", Sandwich.getCheese());
Sandwich.addCondiments("aoli",0.50);
console.log("added condiments: ", Sandwich.getCondiments());
Sandwich.addVeggies("jalepeno", 0.75);
console.log("added veggies: ", Sandwich.getVeggies());

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  // selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });