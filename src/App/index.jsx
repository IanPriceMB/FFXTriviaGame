import React from 'react';
import { Header, Footer } from '../components';
import { Game, Splash } from '../containers';
import { GameStateProvider, NotificationProvider } from '../utils/storeHooks';
import './index.scss';

export default () => {
  return (
    <NotificationProvider>
      <GameStateProvider>
        <div className="app">
            <Header />
            <main className="main" id="main">
              <Game />
            </main>
            <Footer />
          </div>
          <Splash />
      </GameStateProvider>
    </NotificationProvider>
  );
}