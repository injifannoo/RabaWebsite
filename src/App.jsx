import { useState } from 'react'
import Welcome from './components/welcome'
import './App.css'
import Services from './components/Services';

const App = () => {
  return (
      <div>
          <Welcome />
          <Services/>
      </div>
  );
};
export default App;