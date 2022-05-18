import './App.css';
import Posts from './pages/posts/Posts';
import Services from './pages/service/Index';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
