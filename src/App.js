import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import FormPage from './pages/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<FormPage />} />
          
        </Routes>

      </div>

    )
  }
}

export default App;
