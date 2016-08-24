

var Sandwich = (function(){
	var bread ={"wheat": 2.00, "white": 1.75, "rye": 2.05};
	var meat = {"turkey": 1.75, "ham": 1.75};
	var cheese = {"cheddar": 0.75, "pepper-jack": 0.90};
	var condiments = {"mayonaise":0.20,"mustard":0.20,"spicymustard":0.20,"tzatziki":0.30};
	var veggies = {"lettuce":0.25, "tomato": 0.25,"pickles":0.25,"peppers": 0.30};

	return{
		getBread: function(){
			return bread;
		},//getBread
		getMeat: function(){
			return meat;
		},//getMeat
		getCheese: function(){
			return cheese;
		},//getCheese
		getCondiments: function(){
			return condiments;
		},//getCondiments
		getVeggies:function(){
			return veggies;
		}//getVeggies

	}//return

})();

//NSS provided code
var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();