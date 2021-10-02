import React from "react";
import { ConnectTags } from "./ConnectTags";
import { NavMenu } from "./NavMenu";

export function MobileNav() {
  return (
    <div className="m-nav ">
      <div className="nav-container d-flex flex-column justify-content-center align-items-center m-nav-connect">
        <ConnectTags number={false} />
        <li className="nav-item phone">
          <a href="tel:+13178822255" rel="noreferrer" target="_blank">
            (317) 882-2255
          </a>
        </li>
        <div className="nav-container d-flex flex-column  w-100 align-items-start m-nav-connect">
          <NavMenu />
        </div>
      </div>
    </div>
  );
}
