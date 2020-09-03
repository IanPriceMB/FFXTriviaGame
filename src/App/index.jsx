import React from 'react';
import { Header, Footer, Splash } from '../components';
import { Game } from '../containers';
import './index.scss';

export default () => {
  return (
    <>
    <div className="app">
      <Header title="Final Fantasy X Trivia!" />
      <main className="main" id="main">
        <Game />
      </main>
      <Footer />
    </div>
    <Splash />
    </>
  );
}