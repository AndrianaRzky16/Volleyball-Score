// src/components/Scoreboard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementScore, decrementScore, toggleService, resetScore } from '../features/scoreboardSlice';

const Scoreboard = () => {
  const dispatch = useDispatch();
  const { team1, team2, currentSet, isServiceTeam1 } = useSelector((state) => state.scoreboard);

  return (
    <div className="container mx-auto mt-8">
      {/* Tambahkan desain menggunakan kelas Tailwind CSS */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-md text-center">
          <h2 className="text-xl font-semibold mb-4">Team 1</h2>
          <div className="text-4xl font-bold">{team1}</div>
          <button onClick={() => dispatch(incrementScore('team1'))} className="mt-2 bg-white text-blue-500 px-4 py-2 rounded">
            Increment
          </button>
          <button onClick={() => dispatch(decrementScore('team1'))} className="mt-2 bg-white text-blue-500 px-4 py-2 rounded">
            Decrement
          </button>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-md text-center">
          <h2 className="text-xl font-semibold mb-4">Team 2</h2>
          <div className="text-4xl font-bold">{team2}</div>
          <button onClick={() => dispatch(incrementScore('team2'))} className="mt-2 bg-white text-red-500 px-4 py-2 rounded">
            Increment
          </button>
          <button onClick={() => dispatch(decrementScore('team2'))} className="mt-2 bg-white text-red-500 px-4 py-2 rounded">
            Decrement
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-8">
        <button onClick={() => dispatch(toggleService())} className="bg-green-500 text-white px-4 py-2 rounded">
          Toggle Service
        </button>
        <button onClick={() => dispatch(resetScore())} className="bg-gray-500 text-white px-4 py-2 rounded">
          Reset Score
        </button>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold mb-4">Set {currentSet}</h2>
        <p className="text-lg">Service: {isServiceTeam1 ? 'Team 1' : 'Team 2'}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
