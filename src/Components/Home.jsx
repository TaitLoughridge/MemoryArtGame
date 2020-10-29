import React from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';
import './Home.css'
import '../App.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log(this.state.value)
    return (
    <>
    <h1 className='blue-grey-text text-lighten-4'>Art Match</h1>
    <p className='blue-grey-text text-lighten-4'>Welcome to Art Match, the game all about art!</p>
    <form onSubmit={this.handleSubmit}>
    <div class="input-field col s12 container centered">
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="Choose an Art Movement">Choose an Art Movement</option>
        <option value="Medieval">Medieval</option>
        <option value="Renaissance">Renaissance</option>
        <option value="Baroque">Baroque</option>
        <option value="Rococo">Rococo</option>
        <option value="Neoclassical">Neoclassical</option>
        <option value="Romanticism">Romanticism</option>
        <option value="Academic">Academic</option>
        <option value="Realism">Realism</option>
        <option value="Pre-Raphaelite">Pre-Raphaelite</option>
        <option value="Impressionism">Impressionism</option>
        <option value="Post-Impressionism">Post-Impressionism</option>
        <option value="Symbolism">Symbolism</option>
        <option value="Fauvism">Fauvism</option>
        <option value="Expressionism">Expressionism</option>
        <option value="Cubism">Cubism</option>
        <option value="Futurism">Futurism</option>
        <option value="Abstract">Abstract</option>
        <option value="Dada">Dada</option>
        <option value="Precisionism">Precisionism</option>
        <option value="Surrealism">Surrealism</option>
        <option value="Art-Deco">Art-Deco</option>
        <option value="Pop-Art">Pop-Art</option>
      </select>
      <button class="waves-effect waves-light btn cyan darken-3"><Link to={`/game/${this.state.value}`}>Play Game</Link></button>

      <br/>

      <button class="waves-effect waves-light btn cyan darken-3"><Link to={`/justart/${this.state.value}`}>Just The Art</Link></button>

    </div>
    </form>
    </>
    )};
}

export default Home;

