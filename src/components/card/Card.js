import { h, Component } from 'preact';
import './Card.css';

class Card extends Component {
  render () {
    return (
      <a className="Card contained" href="/">
        <div className="img" style={{backgroundImg: 'url("https://www.almanac.com/sites/default/files/daisy_april_birth_flower_1920x1280px_pixabay.jpg")'}}></div>
        <div className="info">
          <h1 className="title">Has Web The Web Outgroun Server Side Rendering?</h1>
          <h5 className="date">Feb 19, 2017</h5>
        </div>
      </a>
    )
  }
}

export default Card;
