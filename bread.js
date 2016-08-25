
// This Sandwich IIFE augments the original one
var Sandwich = (function(breadHandler) {
	var bread ={"wheat": 2.00, "white": 1.75, "rye": 2.05};

  // Private variable to store the different bread prices
  var breadPrices;

  // Augment the original object with another method
  //this method will add a new meat to meat and price to object
    breadHandler.addBread = function(key, value) {
  	bread[key] = value;
  	console.log("Added new bread and price")
  	};
    breadHandler.getBread = function(){
  			return bread;
  	};
    breadHandler.getBreadPrice = function(breadname){
      return bread[breadname];
    };

  // Return the new, augmented object with the new method on it
  return breadHandler;
})(Sandwich || {});