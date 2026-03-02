import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Teams from './pages/Teams'
import BlogList from './pages/BlogList'
import CreateBlog from './pages/CreateBlog'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/BlogList" element={<BlogList />} />
      <Route path="/CreateBlog" element={<CreateBlog />} />
    </Routes>
    </>
  )
}

export default App
