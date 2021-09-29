import React, { useState, useRef } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // ES Module "as" syntax: ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Login(props) {
  const pInput = useRef();

  const [pText, setPText] = useState("");
  const [invalid, setInvalid] = useState("no-show");
  const [toggled, setToggled] = useState(false);
  const { setValidated } = props;

  const handleToggle = () => {
    setToggled(!toggled);
    let pType = pInput.current.type;

    if (pType === "text") {
      pInput.current.type = "password";
    } else {
      console.log("password");
      pInput.current.type = "text";
    }
    console.log(pType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pText === "jlamclone") {
      window.localStorage.setItem("jlamclone", true);
      return setValidated(true);
    }
    setInvalid("invalid");
    setTimeout(() => {
      setInvalid("no-show");
      setPText("");
    }, 3000);
  };

  return (
    <div className="container vh-100 w-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="card rounded d-flex justify-content-evenly align-items-start p-3"
        style={{ width: "50%", height: "200px" }}
        noValidate
      >
        <div className="form-group w-100">
          <label htmlFor="password">Password</label>
          <div className="position-relative">
            <input
              type="password"
              id="password"
              ref={pInput}
              className={`form-control form-control ${invalid}`}
              required
              aria-label="Password to enter site"
              value={pText}
              onChange={(e) => {
                setPText(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={toggled ? faEyeSlash : faEye}
              className="position-absolute"
              onClick={() => {
                handleToggle();
              }}
            />
          </div>

          <div className={`${invalid}`}>Incorrect Password</div>
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}
