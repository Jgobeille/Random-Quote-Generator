/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

// Array of objects that will hold quote information
let timer = window.setInterval(printQuote, 10000);
let quotes = [
  {
    quote: "Pride is not the opposite of shame, but its source.",
    source: "Uncle Iroh",
    citation: "Episode 2.09 'Bitter Work'"
  },
  {
    quote: "Sharing tea with a fascinating stranger is one of life’s true delights.",
    source: "Uncle Iroh",
    citation: "Episode 2.08 'The Chase'"
  },
  {
    quote: "Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.",
    source: "Uncle Iroh",
    citation: "Episode 2.19 'The Crossroads of Destiny'"
  },
  {
    quote: "Life happens wherever you are, whether you make it or not.",
    source: "Uncle Iroh",
    citation: "Episode 2.13 'City of Walls Secrets'"
  },
  {
    quote: "You have come to the crossroads of your destiny. It is time for you to choose. It is time for you to choose good.",
    source: "Uncle Iroh",
    citation: "Episode 2.20 'The Crossroads of Destiny'"
  },
  {
    quote: "There is nothing wrong with a life of peace and prosperity. I suggest you think about what it is you want from your life, and why.",
    source: "Uncle Iroh",
    citation: "Episode 2.17 'Lake Laogai'"
  },
  {
    quote: "IT IS IMPORTANT TO DRAW WISDOM FROM MANY DIFFERENT PLACES",
    source: "Uncle Iroh",
    citation: "Episode 2.09 'Bitter Work'"
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
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/


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


quoteText += '<p class="quote">' + upperCase + '</p>';
quoteText += '<p class="source">' + randomQuote.source;
if(randomQuote.citation) {
  quoteText += '<span class="citation">' + randomQuote.citation + '</span>';
} 
if(randomQuote.year) {
  quoteText += '<span class="year">' + randomQuote.year + '</span>';
}
quoteText += '</p>';
HTML.innerHTML = quoteText;

window.clearInterval(timer);
timer = window.setInterval(printQuote, 10000);
randomColor(255, 1);

}

//randomly changes the color of the button each time a new quote appears
function randomColor(upper, lower) {
  //set color vars to random numbers between 1 and 255)
    let red = Math.floor(Math.random() * upper - lower + lower) + lower;
    let blue = Math.floor(Math.random() * upper - lower + lower) + lower;
    let green = Math.floor(Math.random() * upper - lower + lower) + lower;
    let bgColor = `rgb(${red},${blue},${green})`;
    document.getElementById("loadQuote").style.backgroundColor = bgColor;
}



//timer rest if click function
const click = document.getElementById('loadQuote').addEventListener("click", printQuote, false);






/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/





/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


// Remember to delete the comments that came with this file, and replace them with your own code comments.