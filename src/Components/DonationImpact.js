export default function DonationImpact() {
  const donationLevels = [
    { amount: 5, impact: "Provides 3 meals for children in need." },
    { amount: 10, impact: "Supplies a hygiene kit for a struggling family." },
    { amount: 20, impact: "Provides school supplies for a child for a month." },
    {
      amount: 50,
      impact: "Covers a winter coat and warm clothing for a child.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-deep">
          Your Donation Makes an Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donationLevels.map((level) => (
            <div
              key={level.amount}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-deep mb-2">
                ${level.amount}
              </h3>
              <p className="text-gray-700 mb-4">{level.impact}</p>
              <button className="px-6 py-2 bg-peach text-deep font-bold rounded-lg hover:bg-yellow">
                Donate ${level.amount}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
