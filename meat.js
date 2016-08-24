

//NSS provided iife augmenter
// This Sandwich IIFE augments the original one
var Sandwich = (function(meatHandler) {
	var meat = {"turkey": 1.75, "ham": 1.75};

  // Private variable to store the different meat prices
  var meatPrices;

  // Augment the original object with another method
  //this method will add a new meat to meat and price to object
  meatHandler.addMeat = function(key, value) {
  	meat[key] = value;
  	console.log("Added new meat and price");
  	};
  meatHandler.getMeat = function(){
			return meat;
	};

  // Return the new, augmented object with the new method on it
  return meatHandler;
})(Sandwich || {});