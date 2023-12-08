import { useEffect, useState } from 'react';
import './styles/app.css';

const App  = () => {

  const [quoteInfo, setQuoteInfo] = useState({});
  const [previousColor, setPreviousColor] = useState('');
    
  useEffect(() => {
    getQuote()
  }, [])

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


    const availableColors = colors.filter(color => color !== previousColor);
    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    setPreviousColor(randomColor);

    document.documentElement.style.setProperty('--color', randomColor);
  };

  return (
    <div className="App"> 
      <div class='quote-box'>

        <p class='text'>
          <i class="fa-solid fa-quote-left"></i> 
          {' ' + quoteInfo.text}
        </p>

        <span class='author'>{quoteInfo.author}</span>

        <ul>
          <li>
            <a 
              tabIndex={1}
              class='tweet-quote' 
              target='_blank' 
              rel='noreferrer'
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${quoteInfo.text}  - ${quoteInfo.author}`}>
                <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>

          <li>
            <button 
            tabIndex={2}
            class='new-quote' 
            onClick={getQuote}>
              New quote
            </button>
          </li>
        </ul>
        
      </div>

      <p class='footer'>
        coded by
        <a 
          tabIndex={3}
          href='https://github.com/levymonteiro' 
          class='github' 
          target='_blank' 
          rel='noreferrer'>
            Levy Monteiro
        </a>
      </p>
    </div>
  );
}

export default App;