import { h, Component } from 'preact';
import Card from '../card/Card';

class Home extends Component {
  render () {
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default Home;
