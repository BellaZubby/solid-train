const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter') 
const instagramBtn = document.getElementById('instagram')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes=[]

// show Quote
function newQuote() {
    // generate a random number from the total length of the array.
    const index = Math.floor (Math.random * apiQuotes.length)

    // pick a random quote from the array
    const quote = apiQuotes[index];

    // check if the author field is blank and replace it with 'unknown'
    if (!quote.author) {
        quoteText.textContent = quote.text
        quoteAuthor. textContent = '- Unknown Author'
    } else {
        quoteText.textContent = quote.text
        quoteAuthor.textContent = `-${quote.author}`
    }

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else{
        quoteText.classList.remove('long-quote')
    }

}

// get quote from API
