// ---------- VARIABLES ----------

const optionsMenu = document.getElementById('options-menu');
let displayQuote = document.getElementById('display-quote');
const userGetQuoteButton = document.getElementById('get-quote-button');
const userGetRandomQuoteButton = document.getElementById('get-random-quote-button');
let mainBodyBackground = document.getElementById("main-body");


// ---------- FUNCTIONS ----------





const backgroundColourSelection = (selectedQuotesTitle) => {
  console.log("this works!");
  if (selectedQuotesTitle === "historicalQuotes") { 
    mainBodyBackground.style.backgroundColor = '#21618C '; // Blue
  } else if(selectedQuotesTitle === "travelQuotes") {
    mainBodyBackground.style.backgroundColor = '#239B56'; // Green
  } else if (selectedQuotesTitle === "scienceQuotes") {
    mainBodyBackground.style.backgroundColor = '#76448A'; // Purple
  } else if (selectedQuotesTitle === "politicalQuotes") {
    mainBodyBackground.style.backgroundColor = '#000000'; // Black
} else {
  mainBodyBackground.style.backgroundColor = '#F1C40F'; // Yellow
}
}

const createRandomNumber = () => {
  return Math.floor(Math.random() * 5);  
}




// ---------- OBJECTS ----------

var historicalQuotes = {
  quote1: "I came, I saw, I conquered - Julius Caesar",
  quote2: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history - Mahatma Ghandi",
  quote3: "Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind - Neil Armstrong",
  quote4: "Following the light of the sun, we left the Old World - Christopher Columbus",
  quote5: "Our greatest glory is not in never falling, but in rising every time we fall - Confucius"

}

var travelQuotes = {

  quote6: "We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time - T.S. Elliot",
  quote7: "Perhaps travel cannot prevent bigotry, but by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends - Mary Angelou",
  quote8: "A good traveler has no fixed plans, and is not intent on arriving - Lao Tzu",
  quote9: "I dislike feeling at home when I am abroad - George Bernard Shaw",
  quote10: "Travel, in the younger sort, is a part of education; in the elder, a part of experience - Francis Bacon"
}

var scienceQuotes = {
  quote11: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former - Albert Einstein",
  quote12: "Your theory is crazy, but it's not crazy enough to be true - Niels Bohr",
  quote13: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny... - Issac Asimov",
  quote14: "Science is not only a disciple of reason but, also, one of romance and passion - Stephen Hawking",
  quote15: "Nothing has such power to broaden the mind as the ability to investigate systematically and truly all that comes under thy observation in life - Marcus Aurelius"
}

var politicalQuotes = {
  quote16: "Suppose you were an idiot, and suppose you were a member of Congress; but I repeat myself - Mark Twain",
  quote17: "One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors - Plato",
  quote18: "The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis - Dante Alighieri",
  quote19: "If you put the federal government in charge of the Sahara Desert, in 5 years there'd be a shortage of sand - Milton Friedman",
  quote20: "Politics have no relation to morals - Niccolo Machiavelli"
}

var sportQuotes = {
  quote21: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed - Michael Jordan",
  quote22: "If it doesn't matter who wins or loses, then why do they keep score? - Vince Lombardi",
  quote23: "One man practicing sportsmanship is far better than a hundred teaching it - Knute Rockne",
  quote24: "Most ball games are lost, not won - Casey Stengel",
  quote25: "The more difficult the victory, the greater the happiness in winning - Pele"
}

// EVENT HANDLERS


//userGetRandomQuoteButton.addEventListener('click', getRandomQuote);
const getQuote = () => {

  const selectedQuotesTitle = optionsMenu.value;
  const quotesObject = this[selectedQuotesTitle];
  const quotesKeys = Object.keys(quotesObject);
  console.log(quotesKeys);
  displayQuote.innerHTML = quotesObject[quotesKeys[createRandomNumber()]];
  backgroundColourSelection(selectedQuotesTitle);
}
userGetQuoteButton.addEventListener('click', getQuote);
