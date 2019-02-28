import React, { Component } from 'react';
import { faSmile, faFrown, faBell, faCalendar, faEnvelope, faEnvelopeOpen, faNewspaper, faSnowflake, faBellSlash, faCompass, faEye, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import Char from "./components/Char";
import Nav from "./components/Nav";
import {Footer, CardPanel} from 'react-materialize';

class App extends Component {
  state = {
    icons: [faSmile, faFrown, faBell, faCalendar, faEnvelope, faEnvelopeOpen, faNewspaper, faSnowflake, faBellSlash, faCompass, faEye, faFileAlt].sort(this.randomize),
    clicked: [],
    currScore: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false
  }

  randomize = (a, b) => Math.random() > .5 ? -1 : 1

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      let currScore = this.state.clicked.length + 1,
          clicked = currScore === this.state.icons.length ? [] : [...this.state.clicked, id]

      this.setState({
        icons: this.state.icons.sort(this.randomize),
        clicked: clicked,
        currScore: currScore,
        highScore: Math.max(this.state.highScore, currScore),
        correct: true,
        gameWon: currScore === this.state.icons.length
      });
    } else {
      this.setState({
        icons: this.state.icons.sort(this.randomize),
        clicked: [],
        currScore: 0,
        correct: false,
        gameWon: false
      });
    } 
  };

  // Map over this.state.characters and render a CharCard component for each character object
  render() {
    return (
      <div>
        <Nav
          correct={this.state.correct} 
          gameWon={this.state.gameWon}
          currScore={this.state.currScore}
          highScore={this.state.highScore}
        />
         <CardPanel className="cpanel">
            <p>Click on an image to earn points, but don't click on any more than once!</p>
         </CardPanel>
        <main className="container">
        {this.state.icons.map(icon => (
          <Char
            correct={this.state.correct} 
            key={icon.iconName} 
            icon={icon} 
            handleClick={this.handleClick}
          />
        ))}
        </main>
        <Footer copyrights="&copy; 2019 Andres Villamarin"
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://github.com/andresjoelv">GitHub</a></li>
              <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/andresjoelv/">LinkedIn</a></li>
            </ul>
          }
          className='example'
        >
          <h5 className="white-text">Visit My Website!</h5>
          <a className="grey-text text-lighten-3" href="http://www.andresvillamarin.com/">andresvillamarin.com</a>
        </Footer>
      </div>
    );
  }
}

export default App;
