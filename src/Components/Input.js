//A Input which takes an element and Push it into Array
// Three Button Having Functions of Inseting at Start, End and Middle/Postiton

//Three Button Having Functions to Delete at Start, End and Middle/Position

// Displays The Original Array with its Length
import { useState } from "react";
import validator from "validator";
import React from "react";
import Functions from "./Functions.js";

export default function Input() {
  const [value, setValue] = useState('0');
  const [arr, setArr] = useState([1, 2, 8 ,2 ,3, 4, 5]);

  const handleChange = (e) => {
    if (validator.isInt(e.target.value)) {
      setValue(validator.toInt(e.target.value));
    } else {
      setValue(0);
    }
  };
  const insertAtStart = () => {
    setArr([value, ...arr]);
    setValue("0");
  };
  const insertAtLast = () => {
    setArr([...arr, value]);
    setValue("0");
  };
  const deleteFromStart = () => {
    setArr(arr.splice(1));
  };
  const deleteFromLast = () => {
    arr.pop();
    setArr([...arr]);
  };
  const reset = () => {
    setArr("");
  };
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl font-semibold md:ml-20">{` Array = [${arr}]`}</h1>
      <div className="container mx-auto flex w-2/6">
        <input
          onChange={handleChange}
          value={value}
          placeholder="Enter the Value "
          className=" my-3 flex-grow border-2 transition duration-500 placeholder-gray-400 focus:placeholder-transparent border-black  py-2 text-center text-gray-400 bg-transparent rounded-md focus:outline-none "
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={insertAtLast}
          className="flex-auto w-full md:w-1/5 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Insert at Last
        </button>
        <button
          onClick={insertAtStart}
          className="flex-auto w-full md:w-1/5 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500  font-bold py-2 px-4 rounded  "
        >
          Insert at start
        </button>
        <button
          onClick={deleteFromStart}
          className="flex-auto w-full md:w-1/5 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500  font-bold py-2 px-4 rounded  "
        >
          Delete from Start
        </button>
        <button
          onClick={deleteFromLast}
          className="flex-auto w-full md:w-1/5 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded"
        >
          Delete from Last
        </button>
        <button
          onClick={reset}
          className="flex-auto w-full  bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Reset
        </button>
      </div>
      <Functions arr={arr} />
    </div>
  );
}
