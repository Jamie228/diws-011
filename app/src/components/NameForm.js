import { useState } from 'react';
import React from 'react';


export function NameForm(props) {
    const [name, setName] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
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
    );
  }

  export default NameForm;