import './App.css';

// Enrutamiento:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes:
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;