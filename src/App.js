import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import Products from "./components/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
      </header>
    </div>
  );
}

export default App;
