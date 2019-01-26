let coffee = ['latte', 'cappucino', 'affogato', 'mocha', 'vanilla latte', 'chemex', 'espresso', 'drip', 'fair trade', 'flat white']

let top_common_words = [
  "accessories"," acidic"," affect"," after dinner"," agriculture"," all day"," amounts"," anxiety"," arabica"," area"," aroma"," art"," barista"," beans"," beneficial"," benign"," berry"," beverage"," bitter"," bitter"," black"," blend"," blends"," boil"," bold"," brand"," brew"," business"," buyer"," caffeine"," choices"," citizens"," classic"," coffee break"," coffee klatch"," coffeehouse"," color"," commercial"," commodity"," competition"," connection"," consumption"," convenience"," cooked"," copious"," cost"," country"," craze"," cream"," cultivation"," culture"," cup"," dairy substitute"," dark roast"," decaffeinated"," decanter"," dissolve"," distribution"," dried"," drinking"," drip"," drips"," effect"," electric"," environment"," essences"," evening"," excess"," expense"," experience"," export"," expresso"," extraction"," favorite"," filter"," flavor"," flavorful"," foam"," french roast"," fresh"," full-bodied"," gift"," glass"," global"," gourmet"," grades"," green coffee"," grind"," grinds"," grip"," grounds"," grower"," growing"," headaches"," health"," herbicide"," hot"," humans"," import"," inexpensive"," instant"," international"," irish coffee"," jitter juice"," jitters"," joe"," keen"," kinds"," knowledge"," light"," liquid"," lukewarm"," maker"," market"," mild"," milk"," moderation"," morning"," morning mud"," mug"," natural"," nature"," non-sweetened"," oils"," organic"," origin"," ounces"," pairing"," paks"," passion"," percolator"," perfect"," pesticide"," picked"," plain"," plantation"," plants"," plunger"," politics"," popularity"," portion"," positive"," pot"," pour"," premium"," preparation"," price"," process"," producer"," public"," quality"," quantity"," quest"," regions"," requests"," restaurant"," ripe"," roasted"," rocket fuel"," seeds"," selection"," selling"," serving"," sight"," sip"," smell"," smooth"," soil"," source"," splash"," starbucks"," steep"," stimulating"," storage"," sugar"," sweetened"," symptoms"," tap water"," taste"," temperature"," trade"," types"," uncooked"," vanilla"," variety"," vending machine"," vendor"," warming"," water"," wholesale"," withdrawal"," world"," yield"," zone"
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
