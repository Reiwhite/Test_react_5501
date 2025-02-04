// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Navigation Menu */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;

// className="App-logo"
