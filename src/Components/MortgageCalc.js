import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
export function MortgageCalc() {
  return (
    <FadeIn>
      <div className="container">
        <div className="content">
          <h3>Mortgage Calculator</h3>
          <p>
            Are you wanting an idea of what your payments may look like? Use our mortgage calculator to get a rough
            estimate.
          </p>
        </div>{" "}
        <div className="row">
          <div className="col-6">
            <form onsubmit="return calculateMortgagePayment(event)">
              <label for="home-price">Home Price</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="home-price"
                  aria-label="Home Price (to the nearest dollar)"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>

              <label for="down-payment">Down Payment</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="down-payment"
                  aria-label="Down payment (to the nearest dollar)"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>

              <div className="form-group">
                <label for="loan-term">Loan Term</label>
                <select className="form-control" id="loan-term">
                  <option value="360">30 Year</option>
                  <option value="240">20 Year</option>
                  <option value="180">15 Year</option>
                  <option value="120">10 Year</option>
                  <option value="60">5 Year</option>
                </select>
              </div>

              <label for="rate">Interest Rate</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="rate"
                  aria-label="Interest rate in percentage"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>

              <label for="tax">Property Tax Percentage</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="tax" aria-label="Property Tax in percentage" required />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>

              <label for="insurance">Yearly Insurance</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="insurance"
                  aria-label="Insurance (to the nearest dollar)"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Calculate
              </button>
            </form>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
