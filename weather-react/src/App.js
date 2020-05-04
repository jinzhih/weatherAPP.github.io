import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Section1 from './Section1';
import Section2 from './Section2';


function App() {
  return (
    <div class="weather-channel__container">
      <header>
        <img class="header__logo" src="/icon/logo.png"/> 
        
        <h1 class="header__title">Weather Channel</h1>
      </header>
      <nav>
       
         < Navigation />
       
      </nav>

      <main>
      < Section1 />
      < Section2 />
      </main>

      <footer class="weather-channel__footer"><p>Powered by React</p></footer>
    </div>
  );
}

export default App;
