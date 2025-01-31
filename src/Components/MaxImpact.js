import React from "react";

const maxImpactDonations = [
  {
    amount: 100,
    impact: "Provides a week of groceries for a struggling family.",
  },
  {
    amount: 250,
    impact: "Covers rent assistance for a family in need for one month.",
  },
  {
    amount: 500,
    impact: "Funds an entire school supply drive for a classroom.",
  },
  {
    amount: 1000,
    impact: "Supports a community outreach program for an entire month.",
  },
];

export default function MaxImpact() {
  return (
    <section className="py-16 px-4 bg-peach">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3 text-deep">
          Make a Maximum Impact
        </h2>
        <p className="text-xl mb-5 text-gray-800">
          Your generosity has the power to create max impact in the lives of
          those who need it most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {maxImpactDonations.map((donation) => (
            <div
              key={donation.amount}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-deep mb-2">
                ${donation.amount}
              </h3>
              <p className="text-gray-700 mb-4">{donation.impact}</p>
              <button className="px-6 py-2 bg-deep text-white font-bold rounded-lg hover:bg-lighter">
                Max Impact: ${donation.amount}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
