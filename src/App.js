import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
