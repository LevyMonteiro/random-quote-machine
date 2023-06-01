import { useEffect, useState } from 'react';
import './App.css';

const App  = () => {

  const [quoteInfo, setQuoteInfo] = useState({})
    
  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => {return response.json()})
        .then(data => {
          setQuoteInfo({
            text: data.content,
            author: data.author
          })
        })
  } 

  return (
    <div className="App" id='quote-box'>
      <p id='text'>{quoteInfo.text}</p>
      <span id='author'>{quoteInfo.author}</span>
      <button id='new-quote' onClick={getQuote}>New Phrase</button>
      <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text} id='tweet-quote' target='_blank' rel='noreferrer'>Share Tweet</a>
    </div>
  );
}

export default App;