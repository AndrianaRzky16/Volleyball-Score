// src/App.jsx
import React from 'react';
import Scoreboard from './components/scoreBoard';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md p-4">
          <h1 className="text-3xl font-semibold text-center">Volleyball Scoreboard</h1>
        </div>
        <Scoreboard />
      </div>
    </Provider>
  );
};

export default App;
