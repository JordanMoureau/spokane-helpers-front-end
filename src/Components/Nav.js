import logo from "../Assets/Logo.jpg";

export default function NavBar() {
  return (
    <nav className="bg-white text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-20" />
          <span className="text-xl font-bold text-deep">
            Spokane Helpers Network
          </span>
        </div>

        {/* Right side: Links and CTA */}
        <div className="flex text-deep items-center space-x-6">
          <a href="/admin" className="hover:underline">
            Get Help
          </a>
          <a href="/admin" className="hover:underline">
            Volunteer
          </a>
          <a href="/admin" className="hover:underline">
            About Us
          </a>
          <a href="/admin" className="hover:underline">
            News
          </a>
          <button className="px-6 py-2 bg-peach text-deep font-bold rounded-lg hover:bg-deep hover:text-white">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
}
