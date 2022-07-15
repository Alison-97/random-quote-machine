import "./App.css";
import React from "react";
import quoteArray from "./collection _of_quotes.js";
import { ReactComponent as ManChilling } from "./ManChilling.svg";
import { ReactComponent as ShakingLeg } from "./leg.svg";
import typingHand from './TypingHand.svg';

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

class App extends React.Component {
  state = {
    quote:
      "It is wise to direct your anger towards problems - not people; to focus your energies on answers - not excuses.",
    author: "William Arthur Ward",
    color: "#864F89",
  };

  getRandomIndex = () => {
    const index = Math.floor(Math.random() * quoteArray.length);
    this.setState({
      quote: quoteArray[index].quote,
      author: quoteArray[index].author,
    });
    this.setState({
      color: colors[colorIndex],
    });
    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else colorIndex++;
  };

  render() {
    const {color, quote, author} = this.state
    return (
      <div className="App">
        <div id="background" style={{ background: `${color}` }} ></div>

        <div id="canvas">
          <ManChilling fill={color} />
          <ShakingLeg fill={color} id="shakingLeg" />
          <img src={typingHand} alt="" id="typingHand"></img>


        </div>
        <div id="quote-box" style={{ color: `${color}` }}>
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
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
