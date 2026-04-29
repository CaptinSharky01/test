const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "André Gide" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
];

let lastIndex = -1;

function newQuote() {
  let index;
  do { index = Math.floor(Math.random() * quotes.length); } while (index === lastIndex);
  lastIndex = index;

  const { text, author } = quotes[index];
  const card = document.getElementById('card');
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');

  card.classList.remove('flash');
  void card.offsetWidth; // force reflow to restart animation
  card.classList.add('flash');

  quoteEl.textContent = text;
  authorEl.textContent = author;

  const copyBtn = document.getElementById('copy-btn');
  copyBtn.textContent = 'Copy';
  copyBtn.classList.remove('copied');
}

function copyQuote() {
  const text = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  if (!author) return;

  const full = `"${text}" — ${author}`;
  navigator.clipboard.writeText(full).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}
