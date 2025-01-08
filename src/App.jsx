import './App.css';


// Enrutamiento:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes:
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';
import { HomeProvider } from './context/HomeContext';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={
          <HomeProvider>
            <Home />
          </HomeProvider>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;