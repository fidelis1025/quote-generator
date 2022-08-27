const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter-btn");
const newQuote = document.getElementById("new-quote");

// let apiQuotes = [];

async function newQuotes() {
//   try {
//     const apiUrl = "";
//     const response = await fetch(apiUrl);
//     const apiQuotes = await response.json();
//   } catch (error) {}

  const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];

  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

function newTweet() {
  const twitterUrl = `https://twitter/com/intent/tweet?text = ${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", newTweet);
newQuote.addEventListener("click", newQuotes);
