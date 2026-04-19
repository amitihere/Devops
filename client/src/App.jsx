import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar/Navbar'
import CategoryScroll from './components/CategoryScroll/CategoryScroll'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Shopcart from './components/Shoppingcart/Shopcart'
import Settings from './pages/Settings'
import CategoryPage from './pages/CategoryPage'
import Checkout from './pages/Checkout'
import ProfilePage from './pages/ProfilePage'
import AddressPage from './pages/AddressPage'
import OrdersPage from './pages/OrdersPage'
import HelpPage from './pages/HelpPage'
import AboutPage from './pages/AboutPage'

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
      <Route path="/cart" element={<Shopcart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
    </Routes>
  )
}

export default App