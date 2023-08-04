import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sideber from './components/sideber/Sideber';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="App">
      {/* sidever */}
      <Sideber />
      {/* home */}
      <Chat />
    </div>
  );
}

export default App;
