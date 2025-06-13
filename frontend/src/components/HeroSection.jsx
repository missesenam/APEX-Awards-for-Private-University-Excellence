import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/img.jpg";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">APEX Awards</h1>
          <p className="mb-5">
            Honoring the Peak of Private Excellence in Ghana
          </p>
          <Link to="/nominate" className="btn btn-primary">
            Nominate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
