// src/Calculator.tsx
import React, { useState } from "react";
import "./Calculator.css";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string): void => {
    setInput((prevInput) => prevInput + value);
  };

  const handleReset = (): void => {
    setInput("");
  };

  const handleCalculate = (): void => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <h1>CALCULATOR</h1>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleReset}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
