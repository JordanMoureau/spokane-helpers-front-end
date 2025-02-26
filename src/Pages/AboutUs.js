import aboutus from "../Assets/aboutus.jpg";
import Footer from "../Components/Footer";
import NavBar from "../Components/Nav";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="bg-yellow min-h-screen flex flex-col items-center">
        {/* Hero Section with Image */}
        <div
          className="w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${aboutus})` }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold bg-black/50 p-4 rounded-lg">
            About Us
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl px-4 py-12 text-center">
          <h2 className="text-deep text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lighter text-lg mb-6">
            We are a team of dedicated individuals committed to making a
            positive impact in our community. Our mission is to connect
            volunteers with meaningful opportunities to serve those in need.
          </p>

          <h2 className="text-deep text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lighter text-lg mb-6">
            We believe in the power of community and the difference that a
            helping hand can make. Through our programs, we aim to provide
            support, hope, and tangible change to those who need it most.
          </p>

          <h2 className="text-deep text-3xl font-semibold mb-4">
            Get Involved
          </h2>
          <p className="text-lighter text-lg mb-6">
            Want to make a difference? Join us in our efforts to bring support
            and resources to our community. Whether through volunteering,
            donations, or spreading the word, your contribution matters.
          </p>

          <a href="/volunteer">
            <button className="bg-deep text-white font-bold py-2 px-6 rounded-lg hover:bg-lighter transition">
              Join Us
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
