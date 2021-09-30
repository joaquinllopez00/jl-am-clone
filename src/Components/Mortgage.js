import React, { useState } from "react";
import { LoanPrograms } from "./LoanPrograms";
import { MortgageCalc } from "./MortgageCalc";
import { RealitorServices } from "./RealitorServices";

export function Mortgage() {
  const [option, setOption] = useState("loan");
  const handleSelection = (selection) => {
    setOption(selection);
  };

  return (
    <div className="m-section">
      <div className="container d-flex justify-content-center ">
        <div className="btn-group">
          <label
            className={`btn btn-outline-primary ${option === "loan" && "active"}`}
            onClick={() => {
              handleSelection("loan");
            }}
          >
            Loan Programs
          </label>
          <label
            className={`btn btn-outline-primary ${option === "m-calc" && "active"}`}
            onClick={() => {
              handleSelection("m-calc");
            }}
          >
            Mortgage Calculator
          </label>
          <label
            className={`btn btn-outline-primary ${option === "r-serv" && "active"}`}
            onClick={() => {
              handleSelection("r-serv");
            }}
          >
            Realitor Services
          </label>
        </div>
      </div>
      <section className="selection-container ">
        {option === "loan" && <LoanPrograms />}
        {option === "m-calc" && <MortgageCalc />}
        {option === "r-serv" && <RealitorServices />}
      </section>
    </div>
  );
}
