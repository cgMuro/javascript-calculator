import React from 'react';

const Keys = (props) => {
    return (
        <div className="container w-25" onClick={props.handleClick} id="keys">
            <div className="row">
                <div className="col-3 text-center bg-danger" id="clear">
                    AC
                </div>
                <div className="col-3 text-center bg-danger" id="delete">
                    ⌫
                </div>
                <div className="col-3 text-center operation" id="divide">
                    ÷
                </div>
                <div className="col-3 text-center operation" id="multiply">
                    x
                </div>
            </div>
            <div className="row">
                <div className="col-3 text-center number" id="seven">
                    7
                </div>
                <div className="col-3 text-center number" id="eight">
                    8
                </div>
                <div className="col-3 text-center number" id="nine">
                    9
                </div>
                <div className="col-3 text-center operation" id="subtract">
                    -
                </div>
            </div>
            <div className="row">
                <div className="col-3 text-center number" id="four">
                    4
                </div>
                <div className="col-3 text-center number" id="five">
                    5
                </div>
                <div className="col-3 text-center number" id="six">
                    6
                </div>
                <div className="col-3 text-center operation" id="add">
                    +
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <div className="col text-center number" id="one">
                            1
                        </div>
                        <div className="col text-center number" id="two">
                            2
                        </div>
                        <div className="col text-center number" id="three">
                            3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 text-center number" id="zero">
                            0
                        </div>
                        <div className="col text-center number" id="decimal">
                            .
                        </div>
                    </div>
                </div>
                <div className="col-3 text-center d-flex align-items-center justify-content-center operation" id="equals">
                    =
                </div>

            </div>
        </div>
    )
}

export default Keys;