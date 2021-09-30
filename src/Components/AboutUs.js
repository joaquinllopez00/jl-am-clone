import React from "react";

export function AboutUs() {
  return (
    <div className="au-container container-fluid">
      <div className="container">
        <div className="block-columns d-flex w-100 justify-content-between align-items-center">
          <div className="block-col ">
            <h2>About us.</h2>
            <p>
              We have been serving the home mortgage needs of Central Indiana since 1992. We have seen booms and
              contractions in the housing market over the decades, but our tenacity, focus on the customer experience,
              and our company culture has powered us to great heights.
            </p>
            <p>
              We look forward to helping serve even more home buyers, realtors, and customers in their realization of
              their dreams.
            </p>
            <button className="btn btn-light">Learn More About Us</button>
          </div>
          <div className="block-col d-flex justify-content-end align-items-center">
            <p>
              <a href="https://www.approvedmortgage.com?wvideo=sujpoyobdr">
                <img
                  src="https://embedwistia-a.akamaihd.net/deliveries/21841dc0ebb30b3aeed12ab5a2ed9be2.webp?image_crop_resized=640x360"
                  width="400"
                  height="225"
                  loading="lazy"
                  alt="About Us Video"
                  style={{ border: "1px solid rgb(204, 204, 204)" }}
                />
              </a>
            </p>
            <p>
              <a href="https://www.approvedmortgage.com?wvideo=sujpoyobdr" alt="About Approved Mortgage"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
