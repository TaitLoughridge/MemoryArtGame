import React from 'react';
import './Home.css'

const Home = props => (
    <>
    <h1>Art Match</h1>
    <p>Welcome to Art Match, the game all about art!</p>

      <label for="artMovements">Choose a Art Movement:</label>
      <select name="artMovements" id="artMovements">
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

      <br/>

      <button onClick={() => window.location.reload(false)}>Play Game</button>
      <button onClick={() => window.location.reload(false)}>Just the Art</button>

    </>
);

export default Home;