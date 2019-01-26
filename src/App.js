import React, { Component } from 'react';
import Box from './Box'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textalign:"center"}}>Heros Kids </h1>
        <Box name='objet1' content="jojoizmfozrhfp" image="https://i.imgur.com/7zTR5Mt.png"/>
        <Box name='objet2' content="abcdefghijklmn" image="https://i.imgur.com/4LeeFmag.png"/>
        <Box name='objet3' content="fsgknskfbggjjr" image="https://i.imgur.com/oJK3K7u.png"/>
        <Box name='objet4' content="dgfijngjtguhit" image="https://i.imgur.com/qtuTzVV.png"/>
      </div>
    );
  }
}

export default App;
