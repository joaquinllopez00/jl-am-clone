import React from "react";
import "../styles/LandingPage.css";
import { LandingHero } from "../Components/LandingHero";
import { GotYourBack } from "../Components/GotYourBack";
import { Mortgage } from "../Components/Mortgage";
import { AboutUs } from "../Components/AboutUs";
import { Reviews } from "../Components/Reviews";
export function LandingPage() {
  return (
    <>
      {/* <div id="lp-hero" className="container-fluid"></div> */}

      <main id="main-content" className="">
        <LandingHero />
        <GotYourBack />
        <Mortgage />
        <AboutUs />
        <Reviews />
      </main>
    </>
  );
}
