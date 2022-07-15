import "./App.css";
import React from "react";
import { ReactComponent as ManChilling } from "./SVG/ManChilling.svg";
import { ReactComponent as ShakingLeg } from "./SVG/leg.svg";
import { ReactComponent as MusicNote } from "./SVG/music_note_1.svg";
import typingHand from './SVG/TypingHand.svg';

var colors = [
  "#864F89",
  "#385723",
  "#006AA3",
  "#941100",
  "#ED8E36",
  "#00A88E",
  "#798DA5",
];
let colorIndex = 1;

const quoteAPI = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

class App extends React.Component {
  state = {
    quotes: [{quote:'',author:''}],
    index: 0,
    color: "#864F89",
  };

  componentDidMount() {
    fetch(quoteAPI).then(res => res.json())
      .then(res => {
        this.setState({
          quotes: res.quotes
        }, this.getRandomIndex);
    });
  }

  getRandomIndex = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({
      index: randomIndex,
      color: colors[colorIndex]
    })

    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else colorIndex++;
  };

  render() {
    const {color, quotes, index} = this.state
    const singleQuote = quotes[index];
    return (
      <div className="App">
        <div id="background" style={{ background: `${color}` }} ></div>

        {/* CANVAS */}
        <div id="canvas">
          <ManChilling fill={color} id="manChilling" />
          <ShakingLeg fill={color} id="shakingLeg" />
          <img src={typingHand} alt="" id="typingHand"></img>
          <MusicNote fill={color} id="musicNote1" />
        </div>


        <div id="quote-box" style={{ color: `${color}` }}>
          <p id="text">{singleQuote.quote}</p>
          <p id="author">- {singleQuote.author}</p>
        </div>


        <button
          id="next-button"
          onClick={this.getRandomIndex}
          style={{ background: `${this.state.color}` }}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default App;
