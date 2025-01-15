import './App.css';

// Enrutamiento:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Contextos:
import { HomeProvider } from './context/HomeContext';
import { MensajeProvider } from './context/MensajeContexto';

// Páginas:
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';

// Componentes:
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import MensajeProp from './components/MensajeProp';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <MensajeProvider><Mensaje /></MensajeProvider>  {/* Mensaje debe estar envuelto por MensajeProvider. */}
      <MensajeProp msg="Salud a todos!" />            {/* MensajeProp NO depende de MensajeProvider y funciona igual. */}
      <Routes>
        <Route path="/" element={<HomeProvider> <Home /> </HomeProvider>} />
        <Route path="/NuevoVideo" element={<NuevoVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;