import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F5F5F5] z-50">
      <div className="flex justify-between h-15 items-center">
        <img src="./LOGO.png" alt="Logo" className="h-18 w-18 object-contain"/>
        <ul className="flex gap-10 font-[600] font-semibold text-rose-300">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Teams">Teams</Link></li>
          <li><Link to="/BlogList">Blog List</Link></li>
          <li><Link to="/CreateBlog">Create Blog</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar