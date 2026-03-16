import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar/Navbar'
import CategoryScroll from './components/CategoryScroll/CategoryScroll'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Shopcart from './components/Shoppingcart/Shopcart'
import SellerDashboard from './pages/SellerDashboard'
import Settings from './pages/Settings'

function HomeLayout() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <>
      <Navbar />

      <CategoryScroll
        activeCategory={activeCategory}
        setActiveCategory={(cat) =>
          setActiveCategory(prev => (prev === cat ? null : cat))
        }
      />

      <HomePage activeCategory={activeCategory} />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/cart" element={<Shopcart />} />
      <Route path="/seller" element={<SellerDashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App