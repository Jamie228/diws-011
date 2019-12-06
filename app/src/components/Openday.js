import { useState, useEffect } from "react";
import React from "react";
import NameForm from "./NameForm";

export function Openday(props) {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseSubmitted, setCourseSubmitted] = useState(false);

  const handleAccClick = evt => {
    setCourseName("BSc (Hons) Accounting and Finance");
    setCourseSubmitted(true);
  };

  const handleCompClick = evt => {
    setCourseName("BSc (Hons) Computing and Information Systems");
    setCourseSubmitted(true);
  };

  const handlePerfClick = evt => {
    setCourseName("BA (Hons) Performing Arts");
    setCourseSubmitted(true);
  };

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
    courseDetails = (
      <div className="container">
        <br></br>
        <h2>Accounting and Finance? Sweet!</h2>
        <p>
          Knowledge and understanding in this course is designed around the
          graduate being able to obtain exemptions from the Association of
          Chartered Certified Accountants (ACCA) upon its completion. These
          exemptions are subject to approval. It also includes a wide range of
          skills identified by both employers and ACCA as being important for
          accountancy and finance graduates in the 21st century.
        </p>

        <p>
          Ethics and sustainable business are covered, as is the ability to
          communicate effectively both in writing and orally, to work in teams
          and to be able to think critically and solve problems.
        </p>

        <p>
          The teaching and learning includes a diverse and dynamic range of
          strategies including practical classes and workshops.
        </p>
        <a href="https://www.ucp.ac.uk/a-z-courses/undergraduate-courses/bsc-hons-accounting-and-finance-20/">
          Find out more here!
        </a>
      </div>
    );
  } else if (courseName === "BSc (Hons) Computing and Information Systems") {
    courseDetails = (
      <div className="container">
        <br></br>
        <h2>Computing and Information Systems? Awesome!</h2>
        <p>
          What sets this course apart is its flexibility - with 16 optional
          modules to choose from in years 2 and 3. It is ideal if you are
          looking for a wide range of computing skills: from web design and
          development with PHP and JavaScript, computer programming in languages
          such as C# and Python, mobile app coding in Java, and embedded systems
          with C++. You will develop skills in cyber security, database
          management and CISCO network systems support, and have the option to
          study specialised subjects such as AI with Machine Learning and Big
          Data. We will help you develop a systematic, creative and flexible
          approach to problem solving that computing professionals rely on.
        </p>

        <p>
          The course is designed with modules to promote your professional
          growth and personal development. You will be encouraged to acquire key
          practical skills to help you build a broad base and deep knowledge of
          computing. This will allow you to make informed choices when
          developing specialist in-depth knowledge in your preferred areas.
        </p>

        <p>
          <a href="https://www.ucp.ac.uk/a-z-courses/undergraduate-courses/bsc-hons-computing-and-information-systems-20/">
            Find out more here!
          </a>
        </p>
        <p>
          <a href="http://localhost:5500/index.html">Or here!</a>
        </p>
      </div>
    );
  } else if (courseName === "BA (Hons) Performing Arts") {
    courseDetails = (
      <div className="container">
        <br></br>
        <h2>Performing Arts? Great!</h2>
        <p>
          This Performing Arts degree is a practice-based course, equipping you
          with the interdisciplinary skill set required by the contemporary
          performer. Through core ‘Performance Skills’ and ‘Academic,
          Professional, Research and Employability Skills’ pathways, you will
          develop the foundations necessary to the autonomous, public-facing,
          and industry-engaged assessments later in the course.
        </p>

        <p>
          You will also be introduced to a range of performance-making
          disciplines, including:
        </p>

        <ul className="text-left">
          <li>New Media Performance and Production</li>
          <li>Directing and Devising</li>
          <li>Adapting Shakespeare</li>
          <li>Writing for Performance</li>
          <li>Performance Practice-as-Research</li>
          <li>Applied Performance Project</li>
        </ul>
      </div>
    );
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

      {courseSubmitted ? (
        <>
          <br />
          <div className="container">
            <h2>
              Right, will you be living in Peterborough while studying with us?
            </h2>
            <button className="btn btn-primary btn-lg btn-block">
              Yes, I Will!
            </button>
            <button className="btn btn-primary btn-lg btn-block">
              Nope, I'm Coming From Somewhere Else!
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Openday;
