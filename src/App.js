import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results"
// import Employees from "./components/Employees";
// import API from "./utlis/API"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
      {/* <Employees /> */}
        <h1>Test 22</h1>
      <Footer />
    </div>
  );
}

export default App;
