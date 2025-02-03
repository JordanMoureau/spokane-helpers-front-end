import React from "react";

export default function FloatingMemberButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="px-6 py-3 bg-deep text-white font-bold rounded-full shadow-lg hover:bg-lighter transition">
        Become a Member
      </button>
    </div>
  );
}
