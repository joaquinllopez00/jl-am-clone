import React, { useState } from "react";
import "../styles/nav.css";

import { ConnectTags } from "./ConnectTags";
import { MobileNav } from "./MobileNav";
import { NavMenu } from "./NavMenu";

export function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <header id="main-header" className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <a href="/" className="navbar-brand">
            <img
              width="464px"
              height="164px"
              alt="Approved Mortgage Logo in white"
              loading="lazy"
              className="attachment-full size-full lazyloaded"
              src="https://www.approvedmortgage.com/wp-content/uploads/2020/07/amc-logo-light.png"
            />
          </a>
          <div className="nav-desktop">
            <div className="nav-container ">
              <ConnectTags number={true} />
            </div>
            <div className="nav-container d-flex align-items-center">
              <NavMenu />
            </div>
          </div>
          <button
            className={`navbar-toggler collapsed ${toggled && "toggled"}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={() => {
              setToggled(!toggled);
            }}
          >
            <span className={`navbar-lines ${toggled && "toggled"}`}></span>
          </button>
          <div id="navbarNav" className={`offscreen-nav ${toggled && "visible"}`} role="navigation">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}
