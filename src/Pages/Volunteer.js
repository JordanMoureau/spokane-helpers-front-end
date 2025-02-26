import Footer from "../Components/Footer";
import NavBar from "../Components/Nav";

export default function VolunteerPage() {
  return (
    <>
      <NavBar />
      <div className="bg-yellow min-h-screen flex flex-col items-center px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl text-center">
          <h1 className="text-deep text-4xl font-bold mb-4">
            Become a Volunteer
          </h1>
          <p className="text-lighter text-lg mb-6">
            Join us in making a difference! Your time and effort can change
            lives.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg mt-8">
          <h2 className="text-deep text-2xl font-semibold mb-4">
            Volunteer Sign-Up
          </h2>
          <form className="space-y-4">
            <div>
              <label className="text-deep block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-deep focus:border-deep"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="text-deep block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-deep focus:border-deep"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="text-deep block text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-deep focus:border-deep"
                placeholder="(123) 456-7890"
                required
              />
            </div>

            <div>
              <label className="text-deep block text-sm font-medium">
                Availability
              </label>
              <select
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-deep focus:border-deep"
                required
              >
                <option value="">Select one</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="text-deep block text-sm font-medium">
                Message (Optional)
              </label>
              <textarea
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-deep focus:border-deep"
                placeholder="Tell us why you’d like to volunteer!"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-deep text-white font-bold py-2 rounded-lg hover:bg-lighter transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
