
// This Sandwich IIFE augments the original one
var Sandwich = (function(cheeseHandler) {
	var cheese = {"cheddar": 0.75, "pepperjack": 0.90};

  // Private variable to store the different cheese prices
  var cheesePrices;

  // Augment the original object with another method
  //this method will add a new meat to meat and price to object
  cheeseHandler.addCheese = function(key, value) {
  	cheese[key] = value;
  	console.log("Added new cheese and price")
  	};
  cheeseHandler.getCheese = function(){
			return cheese;
	};
  cheeseHandler.getCheesePrice = function(cheesename){
      return cheese[cheesename];
  }

  // Return the new, augmented object with the new method on it
  return cheeseHandler;
})(Sandwich || {});