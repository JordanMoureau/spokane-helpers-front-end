import React from "react";

export default function VolunteerSection() {
  return (
    <section className="py-16 px-4 bg-brand-yellow">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-deep">
          Not in a position to donate? We get it.
        </h2>
        <p className="text-xl mb-4 text-gray-700">
          Consider volunteering your time instead.
        </p>
        <button className="mt-6 px-8 py-4 bg-deep text-white rounded-lg shadow-lg hover:bg-brand-lighter">
          Volunteer Now
        </button>
      </div>
    </section>
  );
}
