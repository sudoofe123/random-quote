const quoteStatements = [
  {
    statement: "I think the perfection of love is that its not perfect.",
    author: "Taylor Swift",
  },
  {
    statement:
      "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    statement: "Life without love is like a tree without blossoms or fruit.",
    author: "Khalil Gibran",
  },
  {
    statement:
      "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    author: "Maya Angelou",
  },
  {
    statement:
      "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    author: "Victor Hugo",
  },
  {
    statement: "You are my heart, my life, my one and only thought",

    author: "Arthur Conan Doyle",
  },
  {
    statement:
      "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    author: "Victor Hugo",
  },
  {
    statement:
      "When I tell you I love you, I dont say it out of habit. I say it to remind you that youre the best thing that ever happened to me.",
    author: "Onyebuchi Princewill",
  },
];
console.log(quoteStatements);

const btn = document.querySelector(".btn");
const quotes = document.querySelector(".quote");
// author field
const author = document.querySelector(".author");
const container = document.querySelector(".container");
const span = document.querySelector(".span");

btn.addEventListener("click", generateQuote);

function generateQuote() {
  //get random number as index

  const quoteIndex = Math.floor(Math.random() * quoteStatements.length);

  //set current quote base on random index
  const currentQuote = quoteStatements[quoteIndex].statement;
  //set current author base on same index
  const currentAuthor = quoteStatements[quoteIndex].author;

  //display in quote field and author field
  quotes.textContent = currentQuote;
  author.textContent = currentAuthor;

  //   const span = document.createElement("span");
  //   span.innerText = `"`;
  //   container.append(span);
}

generateQuote();

// const text = `"`;
// span.textContent = text;
