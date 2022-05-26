import React, { useState } from "react";
import Layout from "../utils/layout";

export default function calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState();

  function handleSum(method) {
    let value1 = JSON.parse(input1);
    let value2 = JSON.parse(input2);
    if (method === "add") {
      let sum = value1 + value2;
      setResult(sum);
    } else if (method === "sub") {
      let sub = value1 - value2;
      setResult(sub);
    } else if (method === "multiply") {
      let multiply = value1 * value2;
      setResult(multiply);
    } else if (method === "division") {
      let division = value1 / value2;
      setResult(division);
    } else {
      let modulud = value1 % value2;
      setResult(modulud);
    }
  }

  return (
    <Layout>
      <div className=" calculator mx-auto my-4  ">
        <h1 className="mb-4">Calculator</h1>
        <div className="input-group input mb-3 d-flex">
          <label>Input1 </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="input-group input mb-3">
          <label>Input 2 </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between ">
          <button
            type="button"
            className="btn btn-primary w-25 mx-2 mt-5"
            onClick={() => handleSum("add")}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary w-25 mx-2 mt-5"
            onClick={() => handleSum("sub")}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-primary w-25 mx-2 mt-5"
            onClick={() => handleSum("multiply")}
          >
            *
          </button>
          <button
            type="button"
            className="btn btn-primary w-25 mx-2 mt-5"
            onClick={() => handleSum("division")}
          >
            /
          </button>
          <button
            type="button"
            className="btn btn-primary w-25 mx-2 mt-5"
            onClick={() => handleSum("modulus")}
          >
            %
          </button>
        </div>
        <hr></hr>
        <p>{result}</p>
      </div>
    </Layout>
  );
}
