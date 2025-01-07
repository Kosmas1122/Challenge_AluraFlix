import './App.css';

// Enrutamiento:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes:
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;