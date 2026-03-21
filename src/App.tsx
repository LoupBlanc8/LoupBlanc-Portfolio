import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Veille from './pages/Veille';
import Contact from './pages/Contact';
import Competences from './pages/Competences';

import { EtheralShadow } from '@/components/ui/etheral-shadow';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <EtheralShadow title="Ocean Deep" />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
