/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Array of objects that will hold quote information

/*
This will make a random number between one 
and the max number of items in the array. 

Next it will return the quotes array and access 
any object in the array with the random number
*/
const getRandomQuote = quotes => {
  const max = quotes.length;

  const randomNumber = Math.floor(Math.random() * max);

  return quotes[randomNumber];
};

//Create function that prints the quote to the page. Good idea is to set each section of the object to a var and then append the text to the HTML already present on the page. ...Maybe
const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let quoteText = "";
  const HTML = document.getElementById("quote-box");
  const quote = randomQuote.quote;
  const upperCase = quote.quote.toUpperCase();

  //compile all text from quotes object into to quote text var
  quoteText += `<p class="quote"> ${upperCase} </p>
                <p class="source"> ${randomQuote.quote.source} `;

  //check if citation and year are included
  if (randomQuote.quote.citation) {
    quoteText += `<span class="citation"> ${randomQuote.quote.citation} </span>`;
  }
  if (randomQuote.quote.title) {
    quoteText += `<span class="title"> ${randomQuote.quote.title} </span>`;
  }
  if (randomQuote.quote.year) {
    quoteText += `<span class="year"> ${randomQuote.quote.year} </span>`;
  }

  //close paragraph tag and print to the page
  quoteText += `</p>`;
  HTML.innerHTML = quoteText;

  myTimer();

  //run randomNumber function
  randomColor(256, 1);
};

//randomly changes the color of the button each time a new quote appears
const randomColor = (upper, lower) => {
  //set color vars to random numbers between 1 and 255)
  const num = [];
  upper = Math.floor(upper);

  for (var i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * upper - lower);
    num.push(random);
  }

  const red = num[0];
  const blue = num[1];
  const green = num[2];
  const bgColor = `rgb(${red},${blue},${green})`;
  const button = document.getElementById("loadQuote");

  button.style.backgroundColor = bgColor;
};

//Set timer to change quote every ten seconds
let timer = "";

const myTimer = () => {
  //clear timer interval when button is pressed and then reset the timer again
  window.clearInterval(timer);
  timer = window.setInterval(printQuote, 10000);
};
//when button is clicked, run printQuote function
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

/*
Additions:
Twitter share feature.
A fade in feature for every time a new quote is generated
Add your own quote feature
Quote will play the audio of the actual quote
Make the page responsive to different page sizes

*/
