import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        
        <img src="https://img1.picmix.com/output/stamp/thumb/6/9/7/8/2588796_cb6f0.gif" alt="logo" />
        <p>
          Kuru Kuru 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kururing
        </a>
      </header>
    </div>
  );
}

export default App;

// className="App-logo"
