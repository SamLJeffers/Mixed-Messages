const positiveMessage = ["The sun is shinning, the weather is sweet!", "Wake up positive, feel positive, have an awesome day!", "You are braver than you believe, stronger that you seem and smarter than you think!", "Winning doesn't always mean you finish first, winning means your doing better than you have done before"];

const songQuote = ["Dont worry, be happy", "What a wonderful World", "Don't stop believin", "Walking on sunshine", "Get up, Stand up"];

const generteRandomMessage = () => {
    let positiveMessageIndex = Math.floor(Math.rondom()* positiveMessage.length);
    let songQuoteIndex = Math.floor(Math.rondom()* songQuote.length);
    let message = positiveMessage[positiveMessageIndex] + songQuote[songQuoteIndex];

    console.log(message);
}