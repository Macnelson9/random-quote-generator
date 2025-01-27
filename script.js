'use strict';

const quoteEl = document.getElementById('quote');
const quoteAuthor = document.getElementById('quote-author');
const getQuote = document.getElementById('get-Quote');
const url = 'https://api.quotable.io/random';

// const getQuotes = () => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       quoteEl.innerText = data.content;
//       quoteAuthor.innerText = '-' + data.author;

//       console.log(data.content);
//       console.log(data.author);
//     });
// };

// getQuotes();
// window.addEventListener('load', getQuotes);
// getQuote.addEventListener('click', getQuotes);

async function getQuotes() {
  try {
    getQuote.innerText = 'Loading...';
    getQuote.disabled = true;
    quoteEl.innerText = 'Updating...';
    quoteAuthor.innerText = 'Updating...';

    const response = await fetch(url);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthors = data.author;
    quoteEl.innerText = quoteContent;
    quoteAuthor.innerText = quoteAuthors;
    getQuote.innerText = 'Get a Quote';
    getQuote.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = 'An error happened, try again later...';
    quoteAuthor.innerText = 'An error happened';
    getQuote.innerText = 'Get a Quote';
    getQuote.disabled = false;
  }
}

getQuotes();

getQuote.addEventListener('click', getQuotes);
