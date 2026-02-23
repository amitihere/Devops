import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import CategoryScroll from './components/CategoryScroll/CategoryScroll';
import HomePage from './pages/HomePage';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <Navbar />
      <CategoryScroll
        activeCategory={activeCategory}
        setActiveCategory={(cat) =>
          setActiveCategory(prev => prev === cat ? null : cat)
        }
      />
      <HomePage activeCategory={activeCategory} />
    </>
  );
}

export default App;
