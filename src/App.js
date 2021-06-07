import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search"
import API from "./utlis/API"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
        <h1>Test</h1>
      <API />
      <Footer />
    </div>
  );
}

export default App;
