import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
export function LoanPrograms() {
  return (
    <FadeIn>
      <div className="container">
        <div className="col content">
          <h3>Loan Programs</h3>
          <p>
            Approved Mortgage offers a wide variety of home purchase and refinance products. We’ve simplified the
            process of shopping for a mortgage and finding the best home loan option for your needs.
          </p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </FadeIn>
  );
}
