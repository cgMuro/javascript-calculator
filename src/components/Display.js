import React from 'react';

function Display(props) {

    const placeholder = <p className="text-dark p-0 m-0">placeholder</p>;

    const expression = props.expression !== '' ? props.expression : placeholder;

    return (
        <div className="container w-25 bg-dark p-1" style={style} id="displayer">
            <div className="d-flex justify-content-end align-items-end mr-2" id="expression">
                {expression}
            </div>
            <div className="d-flex justify-content-end align-items-end p-2" id="display">
                {props.toDisplay}
            </div>
        </div>
    )
}

const style = {
    color: 'white',
    fontSize: '20px'
}

export default Display;