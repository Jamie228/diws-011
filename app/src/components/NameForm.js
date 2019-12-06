import { useState, useEffect } from "react";
import React from "react";

export function NameForm(props) {

return(
<form onSubmit={props.onSubmit}>
        <label>
          <input
            className="form-control form-control-lg"
            type="text"
            value={props.name}
            onChange={props.onChange}
          />
        </label>
        <button className="btn btn-primary mx-3">Submit</button>
      </form>
      )
}

export default NameForm;

