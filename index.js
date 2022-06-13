const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter') 
const instagramBtn = document.getElementById('instagram')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

// show Quote
const newQuote = () => {
    // generate a random number from the total length of the array.
    const index = Math.floor (Math.random() * apiQuotes.length)

    // pick a random quote from the array
    const quote = apiQuotes[index];

    // check if the author field is blank and replace it with 'unknown'
    if (!quote.author) {
        quoteText.textContent = quote.text
        quoteAuthor. textContent = '- Unknown Author'
    } else {
        quoteText.textContent = quote.text
        quoteAuthor.textContent = `- ${quote.author}`
    }

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else{
        quoteText.classList.remove('long-quote')
    }

}

// get quote from API
const getQuote = async () => {
    const apiUrl = 'https://type.fit/api/quotes'

    try {
        // response from the quotes api
        const response = await fetch(apiUrl)


        // convert the response to JSON fromat to extract data (quotes)
        apiQuotes = await response.json()

        // display a quote by default
        newQuote()
    }   catch (error) {
        console.log(error);
    }
    
}

const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} ${quoteAuthor.innerText}`
    window.open(twitterUrl, '_blank')
}

const postQuote = () => {
    const instagramUrl =`https://www.instagram.com/`
    window.open(instagramUrl, '_blank')
}

// event listeners
newQuoteBtn.addEventListener ('click', newQuote)
twitterBtn.addEventListener ('click', tweetQuote)
instagramBtn.addEventListener ('click', postQuote)
// fetch quotes from api when page renders
getQuote()


