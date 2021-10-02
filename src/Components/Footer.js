import React from "react";
import { ConnectTags } from "./ConnectTags";
import { Location } from "./Location";

const locationData = {
  headquarterLocation: {
    title: "Headquarter Location",
    add: "107 N State Road 135 Ste 301",
    city: "Greenwood, IN 46142",
    num: "(317) 882-2255",
    fax: "(317) 534-3695",
  },
  indianapolisLocation: {
    title: "Indianapolis Location",
    add: "333 N Alabama Street Ste 350",
    city: "Indianapolis, IN 46202",
    num: "(317) 882-2255",
  },
  franklinLocation: {
    title: "Franklin Location",
    add: "26 E Jefferson St",
    city: "Franklin, IN 46131",
    num: "(317) 882-2255",
  },
  lafayetteLocation: {
    title: "Lafayette Location",
    add: "760 Park East Blvd Ste 1",
    city: "Lafayette, IN 47905",
    num: "(765) 543-1823",
  },
};

export function Footer() {
  return (
    <footer id="main-footer" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src="https://www.approvedmortgage.com/wp-content/uploads/2020/07/amc-logo-light.png" alt="" />
            <div className="w-100">
              <ConnectTags />
            </div>
            <div className="row">
              <div className="copyright">
                <p>™ &amp; © 2021 Winterwood Mortgage Group, d/b/a Approved Mortgage</p>
                <p>NMLS CO ID 122171. Equal Housing Lender.</p>
                <p>Licensed in IN, KY, MI, TN, and FL.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
