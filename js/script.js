/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing




// Array of objects that will hold quote information
let timer = window.setInterval(printQuote, 10000);
let quotes = [
  {
    quote: "Pride is not the opposite of shame, but its source.",
    source: "Uncle Iroh",
    citation: "Episode 2.09",
    year: 2009,
    title: 'Bitter Work'
  },
  {
    quote: "Sharing tea with a fascinating stranger is one of life’s true delights.",
    source: "Uncle Iroh",
    citation: "Episode 2.08 'The Chase'",
    year: 2009,
    title: 'Bitter Work'
  },
  {
    quote: "Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.",
    source: "Uncle Iroh",
    citation: "Episode 2.19",
    year: 2009,
    title: 'The Crossroads of Destiny'
  },
  {
    quote: "Life happens wherever you are, whether you make it or not.",
    source: "Uncle Iroh",
    citation: "Episode 2.13",
    title: 'City of Walls Secrets'
  },
  {
    quote: "You have come to the crossroads of your destiny. It is time for you to choose. It is time for you to choose good.",
    source: "Uncle Iroh",
    citation: "Episode 2.20",
    year: 2009,
    title: 'The Crossroads of Destiny'
  },
  {
    quote: "There is nothing wrong with a life of peace and prosperity. I suggest you think about what it is you want from your life, and why.",
    source: "Uncle Iroh",
    citation: "Episode 2.17",
    year: 2009,
    title: 'Lake Laogai'
  },
  {
    quote: "IT IS IMPORTANT TO DRAW WISDOM FROM MANY DIFFERENT PLACES",
    source: "Uncle Iroh",
    citation: "Episode 2.09",
    year: 2009,
    title: 'Bitter Work'

  },
  {
    quote: "HOPE IS SOMETHING YOU GIVE YOURSELF. THAT IS THE MEANING OF INNER STRENGTH.",
    source: "Uncle Iroh",
  },
  {
    quote: "DESTINY IS A FUNNY THING. YOU NEVER KNOW HOW THINGS ARE GOING TO WORK OUT.",
    source: "Uncle Iroh",
  },
  {
    quote: "WHILE IT IS ALWAYS BEST TO BELIEVE IN ONESELF, A LITTLE HELP FROM OTHERS CAN BE A GREAT BLESSING.",
    source: "Uncle Iroh",
  },
  {
    quote: "IT IS USUALLY BEST TO ADMIT MISTAKES WHEN THEY OCCUR, AND TO SEEK TO RESTORE HONOR.",
    source: "Uncle Iroh",
  },
]



/*
This will make a random number between one 
and the max number of items in the array. 

Next it will return the quotes array and access 
any object in the array with the random number
*/
function getRandomQuote() {
const max = quotes.length;

let randomNumber = Math.floor(Math.random() * max - 1 + 1); 

let quote = quotes[randomNumber];
return quotes[randomNumber];
}




//Create function that prints the quote to the page. Good idea is to set each section of the object to a var and then append the text to the HTML already present on the page. ...Maybe
function printQuote() {
let randomQuote = getRandomQuote();
let quoteText = '';
let HTML = document.getElementById('quote-box');
let quote = randomQuote.quote;
let upperCase = quote.toUpperCase();

//compile all text from quotes object into to quote text var
quoteText += '<p class="quote">' + upperCase + '</p>';
quoteText += '<p class="source">' + randomQuote.source;
//check if citation and year are included
if(randomQuote.citation) {
  quoteText += '<span class="citation">' + randomQuote.citation + '</span>';
} 
if(randomQuote.year) {
  quoteText += '<span class="year">' + randomQuote.year + '</span>';
}
if(randomQuote.title) {
  quoteText += '<span class="title> Episode: ' + randomQuote.title + '</span>';
}

//close paragraph tag and print to the page
quoteText += '</p>';
HTML.innerHTML = quoteText;

//clear timer interval when button is pressed and then reset the timer again
window.clearInterval(timer);
timer = window.setInterval(printQuote, 10000);
//run randomNumber function
randomColor(255, 1);

}

//randomly changes the color of the button each time a new quote appears
function randomColor(upper, lower) {
  //set color vars to random numbers between 1 and 255)
    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    let red = Math.floor(Math.random() * upper - lower + lower) + lower;
    let blue = Math.floor(Math.random() * upper - lower + lower) + lower;
    let green = Math.floor(Math.random() * upper - lower + lower) + lower;
    let bgColor = `rgb(${red},${blue},${green})`;
    let button = document.getElementById("loadQuote");
    button.style.backgroundColor = bgColor;
}


//when button is clicked, run printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);














