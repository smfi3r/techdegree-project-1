/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [{quote:"Man suffers only because he takes seriously what the Gods made for fun.",
                source: "Alan Watts", year:1968},
              {quote:"What's in a name? That which we call a rose by by any other name would smell as sweet",
               source:"Shakespeare", citation:" Romeo and Juliet", year:1600},
              {quote:"Violence, naked force, has settled more issues in history than has any other factor.",
               source: "Robert A. Heinlein", citation:"Starship Troopers", year:1987},
              {quote:"Whenever you find yourself on the side of the majority, it is time to reform.",
               source: "Mark Twain", year:1904},
              {quote:"There are no two words in the English language more harmful than good job.",
               source: "Terence Fletcher", citation:"Whiplash", year:2014},
              {quote:"Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers, and we have reason to believe that it is a mystery into which the human mind will never penetrate.", source: "Leonhard Euler"}
]

/*
Here is where I will put any of my own functions that I create which were not asked for in the project directions
*/

//constructHTMLstring takes an object literal and returns a string with proper format for display.
//type is object->string

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOTE TO MARKER!!!!!!!:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The constructHTMLstring contains the if statements and string construction that, according to the instructions, is supposed to be in
the printQuote function. I think it is cleaner to just have this logic/construction be in it's own (pure) function. 
*/
function constructHTMLstring(obj){
  let ret_val = ''; //This is the return value

  //Need this if statement because not all of my quotes have a citation and/or a year.
  if(Object.keys(obj).includes("citation") && Object.keys(obj).includes("year")){ 
    ret_val = `<p class="quote">${obj.quote}</p> 
    <p class="source">${obj.source}<span class="citation">${obj.citation} </span> <span class="year">${obj.year}</span></p>`;
  }
  else if(Object.keys(obj).includes("year")){
    ret_val = `<p class="quote">${obj.quote}</p> 
    <p class="source">${obj.source}<span class="year">${obj.year}</span></p>`;
  }
  else{
    ret_val = `<p class="quote">${obj.quote}</p> 
    <p class="source">${obj.source}</p>`;
  }

  return ret_val;
}




/***
 * `getRandomQuote` function
***/
//type is [object] -> string
function getRandomQuote(arr)
{
  let index = Math.floor(Math.random()*(arr.length));
  return constructHTMLstring(arr[index]);
}





/***
 * `printQuote` function
***/
function printQuote(){
  let random_quote = getRandomQuote(quotes); 
  document.getElementById('quote-box').innerHTML = random_quote;
  return random_quote; //string returned, as per instructions
}

/*
Possible update(s):
-The getRandomQuote function does random selection without replacement until all objects have been selected once.
*/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
