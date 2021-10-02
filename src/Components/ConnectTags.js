import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export function ConnectTags(props) {
  return (
    <div>
      <ul className="navbar-nav ml-auto social">
        <li className="nav-item">
          <a href="https://www.facebook.com/approvedmortgageco" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://twitter.com/approvedmortco" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.instagram.com/approvedmortgageco/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/company/approved-mortgage/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.youtube.com/user/ApprovedMortgageCo" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        {props.number && (
          <li className="nav-item phone">
            <a href="tel:+13178822255" rel="noreferrer" target="_blank">
              (317) 882-2255
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
