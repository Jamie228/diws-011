import { useState, useEffect } from "react";
import React from "react";
import NameForm from "./NameForm";

export function Openday(props) {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [courseName, setCourseName] = useState("");

  const handleAccClick = evt => {
    setCourseName("BSc (Hons) Accounting and Finance");
  };

  const handleCompClick = evt => {
    setCourseName("BSc (Hons) Computing and Information Systems");
  };

  const handlePerfClick = evt => {
    setCourseName("BA (Hons) Performing Arts")
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    setNameSubmitted(true);
  };

  const handleNameChange = evt => {
    evt.preventDefault();
    setName(evt.target.value);
  };

  useEffect(() => {
    console.log("name: ", name);
  }, [name]);

  let courseDetails;
  if (courseName === "BSc (Hons) Accounting and Finance") {
    courseDetails = <div className="container"><br></br><h2>Accounting and Finance? Sweet!</h2></div>;
  } else if (courseName === "BSc (Hons) Computing and Information Systems") {
    courseDetails = <div className="container"><br></br><h2>Computing and Information Systems? Sweet!</h2></div>;
  } else if (courseName === "BA (Hons) Performing Arts") {
    courseDetails = <div className="container"><br></br><h2>Performing Arts? Sweet!</h2></div>;
  }

  return (
    <>
      <NameForm
        value={name}
        value={name}
        onSubmit={handleSubmit}
        onChange={handleNameChange}
      />
      {nameSubmitted ? (
        <div className="container">
          <br></br>
          <h2>Hello {name}</h2>
          <p>
            Thanks for checking out UCP, {name}. It means a lot! Now, what
            course are you interested in?
          </p>
          <button
            onClick={handleAccClick}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            BSc (Hons) Accounting and Finance
          </button>
          <button
            onClick={handleCompClick}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            BSc (Hons) Computing and Information Systems
          </button>

          <button
            onClick={handlePerfClick}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            BA (Hons) Performing Arts
          </button>
        </div>
      ) : null}

      {courseDetails}
    </>
  );
}

export default Openday;
