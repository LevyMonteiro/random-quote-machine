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
    <div className="App"> 
      <div id='quote-box'>
        <p id='text'><i class="fa-solid fa-quote-left"></i> {quoteInfo.text}</p>
        <span id='author'>- {quoteInfo.author}</span>
        <ul>
          <li>
            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text} id='tweet-quote' target='_blank' rel='noreferrer'><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <button id='new-quote' onClick={getQuote}>New quote</button>
          </li>
        </ul>
      </div>
      <p id='by'>by <a href='https://github.com/levymonteiro' id='github' target='_blank' rel='noreferrer'>Levy Monteiro</a></p>
    </div>
  );
}

export default App;