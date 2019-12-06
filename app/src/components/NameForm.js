import { useState, useEffect } from "react";
import React from "react";

export function NameForm(props) {
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const [courseName, setCourseName] = useState("");

  const handleBscClick = evt => {
    setCourseName("bsc");
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    setDone(true);
  };

  useEffect(() => {
    console.log("name: ", name);
  }, [name]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="form-control form-control-lg"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button className="btn btn-primary mx-3">Submit</button>
      </form>
      {done ? (
        <div className="container">
          <br></br>
          <h2>Hello {name}</h2>
          <p>Thanks for checking out UCP, {name}. It means a lot! Now, what course are you interested in?</p>
            <button onClick = {handleBscClick} type="button" className="btn btn-primary btn-lg btn-block">BSc (Hons)</button>
            <button type="button" className="btn btn-primary btn-lg btn-block">FdSc</button>
        </div>
        
      ) : null}
    </>
  );
}

export default NameForm;
