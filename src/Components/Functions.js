// Having Buttons With Array Functions
import React, { useState } from "react";

export default function Functions(props) {
  const [show, setShow] = useState(0);
  const [rev, setrev] = useState("Reverse");
  function add(acc, a) {
    return acc + a;
  }

  const sum = (arr) => {
    if (!arr) {
      return 0;
    }
    return arr.reduce(add);
  };
  const average = (arr) => {
    if (sum(arr) === 0) {
      return "Array is Empty";
    }
    return sum(arr) / arr.length;
  };
  const even = (arr) => {
    let arrEven = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        arrEven.push(arr[i]);
      }
    }
    return arrEven;
  };
  // const isPrime = ()=>{

  // }
  const duplicate = (arr) => {
    let dup = [];
    dup = [...new Set(arr)];
    return dup;
  };
  const isPalindrome = (arr) => {
    let rra = [...arr];
    rra.reverse();
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] !== rra[i]) {
        return false;
      }
    }
  };
  const checkDuplicate = () => {
    setShow(`[${duplicate(props.arr)}]`);
  };
  const checkPalindrome = () => {
    if (isPalindrome(props.arr) === false) {
      setShow("This Array is NOT Palindrome");
    } else {
      setShow("This Array is Palindrome");
    }
  };
  const lessThanAverage = (arr) => {
    let x = [];
    for (let i in arr) {
      if (arr[i] < average(arr)) {
        x.push(arr[i]);
      }
    }

    return x;
  };
  const letReverse = (arr) => {
    return arr.reverse();
  };
  const sortA = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  const sortD = (arr) => {
    return arr.sort((a, b) => b - a);
  };
  const clickSum = () => {
    setShow(sum(props.arr));
  };
  const clickAverage = () => {
    setShow(average(props.arr));
  };
  const checkEven = () => {
    setShow(`[${even(props.arr)}]`);
  };
  const sortAscend = () => {
    setShow(`[${sortA(props.arr)}]`);
  };
  const sortDescend = () => {
    setShow(`[${sortD(props.arr)}]`);
  };
  const lessInAverage = () => {
    setShow(`[${lessThanAverage(props.arr)}]`);
  };
  const doReverse = () => {
    setShow(`[${letReverse(props.arr)}]`);
    if (rev === "Arrange") {
      setrev("Reverse");
    } else {
      setrev("Arrange");
    }
  };

  return (
    <div>
      <h1 className="text-6xl my-12 font-semibold text-center">{show}</h1>

      <div className="flex flex-wrap md:mt-24  container mx-auto gap-1">
        <button
          onClick={clickSum}
          className="flex-auto w-full md:w-3/12  bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Sum of Array
        </button>
        <button
          onClick={clickAverage}
          className="flex-auto  w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Average of Array
        </button>
        <button
          onClick={checkPalindrome}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Check if Palindrome
        </button>
        <button
          onClick={checkEven}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Even Array
        </button>
        <button
          onClick={sortAscend}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          sort by Ascending Order
        </button>
        <button
          onClick={sortDescend}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Sort in Descending Order
        </button>
        <button
          onClick={lessInAverage}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Less than Average
        </button>
        <button
          onClick={checkDuplicate}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          Remove Duplicates
        </button>
        <button
          onClick={doReverse}
          className="flex-auto w-full md:w-3/12 bg-blue-500 text-white hover:bg-green-300 focus:bg-red-500 font-bold py-2 px-4 rounded  "
        >
          {rev}
        </button>
      </div>
    </div>
  );
}
