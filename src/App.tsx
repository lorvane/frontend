import { BrowserRouter, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Privacy, Product, Terms } from './pages';

function Pages() {
  const location = useLocation();
  return <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35, ease: 'easeInOut' }}>
    {location.pathname === '/privacy' ? <Privacy /> : location.pathname === '/terms' ? <Terms /> : location.pathname === '/product' ? <Product /> : <Home />}
  </motion.div>;
}

function App() {
  return <BrowserRouter><AnimatePresence mode="wait"><Pages /></AnimatePresence></BrowserRouter>;
}

export default App;