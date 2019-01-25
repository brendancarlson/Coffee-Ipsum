let coffee = ['latte', 'cappucino', 'affogato', 'mocha', 'vanilla latte', 'chemex', 'espresso', 'drip', 'fair trade', 'flat white']

let top_common_words = [
  "Accessories"," Acidic"," Affect"," After dinner"," Agriculture"," All day"," Amounts"," Anxiety"," Arabica"," Area"," Aroma"," Art"," Barista"," Beans"," Beneficial"," Benign"," Berry"," Beverage"," Bitter"," Bitter"," Black"," Blend"," Blends"," Boil"," Bold"," Brand"," Brew"," Business"," Buyer"," Caffeine"," Choices"," Citizens"," Classic"," Coffee break"," Coffee klatch"," Coffeehouse"," Color"," Commercial"," Commodity"," Competition"," Connection"," Consumption"," Convenience"," Cooked"," Copious"," Cost"," Country"," Craze"," Cream"," Cultivation"," Culture"," Cup"," Dairy substitute"," Dark roast"," Decaffeinated"," Decanter"," Dissolve"," Distribution"," Dried"," Drinking"," Drip"," Drips"," Ecological"," Effect"," Electric"," Environment"," Essences"," Evening"," Excess"," Expense"," Experience"," Export"," Expresso"," Extraction"," Favorite"," Filter"," Flavor"," Flavorful"," Foam"," French roast"," Fresh"," Full-bodied"," Gift"," Glass"," Global"," Gourmet"," Grades"," Green coffee"," Grind"," Grinds"," Grip"," Grounds"," Grower"," Growing"," Headaches"," Health"," Herbicide"," Hot"," Humans"," Import"," Inexpensive"," Instant"," International"," Irish coffee"," Jitter juice"," Jitters"," Joe"," Keen"," Kinds"," Knowledge"," Light"," Liquid"," Lukewarm"," Maker"," Market"," Mild"," Milk"," Moderation"," Morning"," Morning mud"," Mug"," Natural"," Nature"," Non-sweetened"," Oils"," Organic"," Origin"," Ounces"," Pairing"," Paks"," Passion"," Percolator"," Perfect"," Pesticide"," Picked"," Plain"," Plantation"," Plants"," Plunger"," Politics"," Popularity"," Portion"," Positive"," Pot"," Pour"," Premium"," Preparation"," Price"," Process"," Producer"," Public"," Quality"," Quantity"," Quest"," Regions"," Requests"," Restaurant"," Ripe"," Roasted"," Rocket fuel"," Seeds"," Selection"," Selling"," Serving"," Sight"," Sip"," Smell"," Smooth"," Soil"," Source"," Splash"," Starbucks"," Steep"," Stimulating"," Storage"," Sugar"," Sweetened"," Symptoms"," Tap water"," Taste"," Temperature"," Trade"," Types"," Uncooked"," Use"," User"," Value"," Vanilla"," Variety"," Vending machine"," Vendor"," Warming"," Water"," Wholesale"," Withdrawal"," World"," Yield"," Zone"
]

$( document ).ready(function() {
  addSentences();
});

function addSentences(){
  var text = "";

  for(var i = 0; i<Math.floor((Math.random() * 5) + 1); i++){
    var sentence = "";
    for(var j=0; j<Math.floor((Math.random() * 15) + 1); j++){
      var word = coffee[Math.floor((Math.random() * coffee.length))];
      word = randomlyConcatACommonWordWithProbability(word, 0.4);
      if(j == 0){
        word = capitalizeFirstLetter(word);
      }
      else{
        sentence = sentence.concat(' ');
      }
      sentence = sentence.concat(word);
    }
    sentence = sentence.concat('. ');
    text = text.concat(sentence);
  }
  $("#coffee-text").after(
    "" +
    text +
    "" +
    "</p>");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomlyConcatACommonWordWithProbability(originalWord, percentageOfRandomWords){
  if(Math.random() < percentageOfRandomWords){
    return top_common_words[Math.floor((Math.random() * top_common_words.length))] + " " + originalWord;
  }
  else{
    return originalWord;
  }
}
