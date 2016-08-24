
// This Sandwich IIFE augments the original one
var Sandwich = (function(VeggiesHandler) {
	var veggies = {"lettuce":0.25, "tomato": 0.25,"pickles":0.25,"peppers": 0.30};

  // Private variable to store the different veggies prices
  var veggiesPrices;

  // Augment the original object with another method
  //this method will add a new meat to meat and price to object
  VeggiesHandler.addVeggies = function(key, value) {
  	veggies[key] = value;
  	console.log("Added new veggie and price")
  	};
  VeggiesHandler.getVeggies = function(){
			return veggies;
	};

  // Return the new, augmented object with the new method on it
  return VeggiesHandler;
})(Sandwich || {});