import React from "react";
import HeroVid from "../Assets/temphero.mov";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-deep text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
      >
        <source src={HeroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col gap-2 items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">We're Here to Help</h1>
        <h2 className="text-2xl mt-4 font-bold">
          Kids are in Need in Spokane right now and there is so much you can do
          to help too.
        </h2>
        <p>
          We're Spokane Helpers Network. A network of people trying to make a
          difference.
        </p>
        <div className="flex flex-row gap-10">
          <button className="mt-6 px-8 py-4 font-bold text-2xl bg-white text-deep rounded-lg shadow-lg hover:bg-peach">
            Donate
          </button>
          <button className="mt-6 px-8 py-4 font-bold text-2xl bg-yellow text-deep rounded-lg shadow-lg hover:bg-peach">
            Get Help Now
          </button>
        </div>
      </div>
    </section>
  );
}
