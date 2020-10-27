import React from 'react';
import ArtCall from './ArtCall';
import './JustArt.css';

const JustArt = props => (
    <>
    <h1>Art Match</h1>
    <button onClick={() => window.location.reload(false)}>Click to reload!</button>
    <p>Welcome to the Art page</p>
    <p>This is all about the Art No Game</p>
    <div>
      <ArtCall />
    </div>
    </>
);

export default JustArt;