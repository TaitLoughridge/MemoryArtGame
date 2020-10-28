import React from 'react';

import 'materialize-css';
import './Home.css'
import '../App.css';


const Home = props => (
    <>
    <h1 className='blue-grey-text text-lighten-4'>Art Match</h1>
    <p className='blue-grey-text text-lighten-4'>Welcome to Art Match, the game all about art!</p>
    <div class="input-field col s12 container centered">
      <select>
        <option value="" disabled selected>Choose an Art Movement</option>
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
      </div>
      <br/>
      <button class="waves-effect waves-light btn cyan darken-3" onClick={() => window.location.reload(false)}>Play Game</button>
      <button class="waves-effect waves-light btn cyan darken-3" onClick={() => window.location.reload(false)}>Just the Art</button>

    </>
);

export default Home;

