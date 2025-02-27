import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import logo from "../Assets/Logo.jpg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-6">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20" />
          </a>
          <a href="/">
            <span className="text-xl font-bold text-deep">
              Spokane Helpers Network
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-deep"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Right side: Desktop Nav */}
        <div className="hidden lg:flex text-deep items-center space-x-6">
          <a href="/admin" className="hover:underline">
            Get Help
          </a>
          <a href="/volunteer" className="hover:underline">
            Volunteer
          </a>
          <a href="/aboutus" className="hover:underline">
            About Us
          </a>
          <a href="/news" className="hover:underline">
            News
          </a>
          <button className="px-6 py-2 bg-peach text-deep font-bold rounded-lg hover:bg-deep hover:text-white">
            Donate Now
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white text-deep flex flex-col items-center justify-center space-y-6 z-50">
          <button
            className="absolute top-5 right-5 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
          <a href="/admin" className="text-2xl hover:underline">
            Get Help
          </a>
          <a href="/volunteer" className="text-2xl hover:underline">
            Volunteer
          </a>
          <a href="/aboutus" className="text-2xl hover:underline">
            About Us
          </a>
          <a href="/news" className="text-2xl hover:underline">
            News
          </a>
          <button className="px-6 py-2 bg-peach text-deep font-bold rounded-lg hover:bg-deep hover:text-white">
            Donate Now
          </button>
        </div>
      )}
    </nav>
  );
}
