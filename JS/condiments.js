
// This Sandwich IIFE augments the original one
var Sandwich = (function(condimentsHandler) {
	var condiments = {"mayonaise":0.20,"mustard":0.20,"spicymustard":0.20,"tzatziki":0.30};

  // Private variable to store the different condiments prices
  var CondimentsPrices;

  // Augment the original object with another method
  //this method will add a new meat to meat and price to object
  condimentsHandler.addCondiments = function(key, value) {
  	condiments[key] = value;
  	console.log("Added new condiment and price")
  	};
  condimentsHandler.getCondiments = function(){
			return condiments;
	};
      condimentsHandler.getCondimentPrice = function(condimentname){
      return condiments[condimentname];
  };

  // Return the new, augmented object with the new method on it
  return condimentsHandler;
})(Sandwich || {});