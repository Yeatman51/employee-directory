
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import API from "./utlis/API"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <h1>Test</h1>
      <API />
      <Footer />
    </div>
  );
}

export default App;
