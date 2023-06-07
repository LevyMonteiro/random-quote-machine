import { useEffect, useState } from 'react';
import './App.css';

const App  = () => {

  const [quoteInfo, setQuoteInfo] = useState({})
    
  useEffect(() => {
    getQuote()
  }, [])

  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Cor inicial do background

  const getQuote = () => {
    //fetch quote on api
    fetch('https://api.quotable.io/random')
      .then(response => {return response.json()})
        .then(data => {
          setQuoteInfo({
            text: data.content,
            author: data.author
          })
        })

    //change background color
    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{backgroundColor}}> 
      <div id='quote-box' style={{color: backgroundColor}}>
        <p id='text'><i class="fa-solid fa-quote-left"></i> {quoteInfo.text}</p>
        <span id='author'>- {quoteInfo.author}</span>
        <ul>
          <li>
            <a style={{backgroundColor}} href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text} id='tweet-quote' target='_blank' rel='noreferrer'><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <button style={{backgroundColor}} id='new-quote' onClick={getQuote}>New quote</button>
          </li>
        </ul>
      </div>
      <p id='by'>by<a href='https://github.com/levymonteiro' id='github' target='_blank' rel='noreferrer'>Levy Monteiro</a></p>
    </div>
  );
}

export default App;