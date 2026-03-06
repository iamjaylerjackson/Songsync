import logo from "../assets/songsync-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <Link to="/">
        <img src={logo} alt="Songsync Logo" />
      </Link>
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        <li className="cursor-pointer hover:text-blue-600">Artist</li>
        <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
        <li className="cursor-pointer hover:text-blue-600">Playing</li>
      </ul>
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>
    </nav>
  );
}

export default Navbar;
