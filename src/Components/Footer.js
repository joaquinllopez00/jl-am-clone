import React from "react";
import { ConnectTags } from "./ConnectTags";

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
            <div className="copyright">
              <p>™ &amp; © 2021 Winterwood Mortgage Group, d/b/a Approved Mortgage</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
