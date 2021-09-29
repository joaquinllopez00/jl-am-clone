import React from "react";
import "../styles/LandingPage.css";
import { LandingHero } from "../Components/LandingHero";

export function LandingPage() {
  return (
    <div id="lp-hero" className="container-fluid">
      <div className="lp-head"></div>
      <div className="container">
        <LandingHero />
      </div>
    </div>
  );
}
