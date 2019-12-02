import React from 'react';

export function Button(props) {
    return (
        <button type="button" className="btn btn-primary my-2">{props.children}</button>
    );
}

export default Button;