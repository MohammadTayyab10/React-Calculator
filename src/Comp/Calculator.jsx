import React, { useState } from "react";

export default function Calculator() {

    const [result, setResult] = useState("");

    const clickHandler = (event) => {

        setResult(result.concat(event.target.value));

    }

    const clearDisplay = () => {

        setResult("");

    }

    const clearOne = () => {

        setResult(result.toString().slice(0,-1))

    }   

    const calculate = () => {

        setResult( eval(result).toString())

    }

    return (

        <>

            <div className="main">


                <input type="text" disabled placeholder="0" value={result} id="result" />

                <input type="button" value="9" className="buttons" onClick={clickHandler} />
                <input type="button" value="8" className="buttons" onClick={clickHandler} />
                <input type="button" value="7" className="buttons" onClick={clickHandler} />
                <input type="button" value="6" className="buttons" onClick={clickHandler} />
                <input type="button" value="5" className="buttons" onClick={clickHandler} />
                <input type="button" value="4" className="buttons" onClick={clickHandler} />
                <input type="button" value="3" className="buttons" onClick={clickHandler} />
                <input type="button" value="2" className="buttons" onClick={clickHandler} />
                <input type="button" value="1" className="buttons" onClick={clickHandler} />
                <input type="button" value="0" className="buttons" onClick={clickHandler} />
                <input type="button" value="." className="buttons" onClick={clickHandler} />
                <input type="button" value="+" className="buttons" onClick={clickHandler} />
                <input type="button" value="-" className="buttons" onClick={clickHandler} />
                <input type="button" value="*" className="buttons" onClick={clickHandler} />
                <input type="button" value="/" className="buttons" onClick={clickHandler} />
                <input type="button" value="%" className="buttons" onClick={clickHandler} />

                <input type="button" value="AC" id="ac" className="buttons button1" onClick={clearDisplay} />

                <input type="button" value="C" id="clear" className="buttons button2" onClick={clearOne} />

                <input type="button" value="=" id="equal" className="buttons button3" onClick={calculate} />

            </div>

        </>

    )


}