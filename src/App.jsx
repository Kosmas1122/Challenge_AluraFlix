import './App.css';


// Enrutamiento:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Contextos:
import { HomeProvider } from './context/HomeContext';

// Páginas:
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';

// Componentes:
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      {/* <GlobalStyles /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomeProvider> <Home /> </HomeProvider>} />
        <Route path="/NuevoVideo" element={<NuevoVideo />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;