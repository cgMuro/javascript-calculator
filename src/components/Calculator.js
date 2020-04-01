import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

import Display from './Display';
import Keys from './Keys';

function Calculator() {

    const [input, setInput] = useState(0);
    const [expression, setExpression] = useState('');
    const [operation, setOperation] = useState(false);


    const handleClick = (e) => {

        const typed = e.target.textContent;

        if (typeof (input) === 'number') {

            if (typed === '+' || typed === '-' || typed === '*' || typed === '÷') {
                setInput(input);
                setExpression(prevExpression => prevExpression.slice(0, prevExpression.length - 2) + typed);
            } else {
                setInput('');
                setExpression('');
            }
        }


        if (typed === 'AC') {
            setInput(0);
            setExpression('');
            setOperation(false)
        } else if (typed === '=') {
            try {
                setInput(evaluate(input));
                setExpression(`${input} = `);
            } catch (error) {
                setInput('Error');
                setTimeout(() => {
                    setInput(0);
                }, 1000)
            }

        } else if (typed === '0' && input === 0) {
            setInput(0);
        } else if (typed === '⌫') {
            console.log(input)
            if(input.length === 1) {
                setInput(0);
            } else {
                setInput(prevInput => prevInput.slice(0, -1));
            }
        } else {
            if (input === 0) {
                setInput(typed);
            } else {
                if (typed === '.') {

                    let decimals = 0;

                    for (let i = 0; i < input.length; i++) {
                        if (input[i] === '+' || input[i] === '-' || input[i] === 'x' || input[i] === '÷') {
                            decimals = 0;
                        } else if (input[i] === '.') {
                            decimals += 1;
                        }
                    }

                    if (decimals > 0) {
                        setInput(prevInput => prevInput);
                    } else {
                        setInput(prevInput => prevInput + typed);
                    }


                } else {

                    if (typed === '+' || typed === 'x' || typed === '÷') {
                        if (operation) {
                            if (typed === 'x') {
                                setInput(prevInput => prevInput[prevInput.length - 1] === '-' ? prevInput : prevInput.slice(0, -1) + '*')
                            } else if (typed === '÷') {
                                setInput(prevInput => prevInput[prevInput.length - 1] === '-' ? prevInput : prevInput.slice(0, -1) + '/')
                            } else {
                                setInput(prevInput => prevInput[prevInput.length - 1] === '-' ? prevInput : prevInput.slice(0, -1) + typed);
                            }
                        } else {
                            if (typed === 'x') {
                                setInput(prevInput => prevInput + '*')
                            } else if (typed === '÷') {
                                setInput(prevInput => prevInput + '/')
                            } else {
                                setInput(prevInput => prevInput + typed);
                            }
                            setOperation(true);
                        }

                    } else {
                        setOperation(false);
                        setInput(prevInput => prevInput + typed);
                    }
                }
            }
        }

        e.persist();
        e.preventDefault();
    }


    return (
        <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={style}>
            <Display toDisplay={input} expression={expression} />
            <Keys handleClick={handleClick} />
        </div>
    )
}

const style = {
    margin: '0 0 10rem',
    minWidth: '50%'
}

export default Calculator;