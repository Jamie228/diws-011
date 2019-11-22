import React from 'react';

export function Heading(props) {

return (
    <h1 style={{color: props.color}}>{props.children}</h1>
);

}

export default Heading;