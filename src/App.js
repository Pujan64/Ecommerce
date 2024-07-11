// // import React, { useState } from 'react';
// // import './Calculator.css';

// // function Calculator() {
// //   const [a, setA] = useState(0);
// //   const [b, setB] = useState(0);
// //   const [operator, setOperator] = useState('+');
// //   const [result, setResult] = useState('');
// //   const [showResult, setShowResult] = useState(false);

// //   const handleAChange = (e) => {
// //     setA(parseFloat(e.target.value));
// //   };

// //   const handleBChange = (e) => {
// //     setB(parseFloat(e.target.value));
// //   };

// //   const handleOperatorChange = (e) => {
// //     setOperator(e.target.value);
// //   };

// //   const handleCalculate = (e) => {
// //     e.preventDefault()
// //     let result;

// //     switch (operator) {
// //       case '+':
// //         result = a + b;
// //         break;
// //       case '-':
// //         result = a - b;
// //         break;
// //       case '*':
// //         result = a * b;
// //         break;
// //       case '/':
// //         if (b === 0) {
// //           result = 'Error: Division by zero!';
// //         } else {
// //           result = a / b;
// //         }
// //         break;
// //       default:
// //         result = 'Error: Invalid operator!';
// //     }

// //     setResult(result);
// //     setShowResult(true);

// //     setTimeout(() => {
// //       setShowResult(false);
// //     }, 5000); // show result for 2 seconds
// //   };

// //   return (
// //     <div className="calculator">
// //       <h1 className="title">Calculator</h1>
// //       <form>
// //         <div className="input-group">
// //           <label>A:</label>
// //           <input type="number" placeholder="0" onChange={handleAChange} className="input-field" />
// //         </div>
// //         <div className="input-group">
// //           <label>B:</label>
// //           <input type="number" placeholder="0" onChange={handleBChange} className="input-field" />
// //         </div>
// //         <div className="input-group">
// //           <label>Operator:</label>
// //           <select value={operator} onChange={handleOperatorChange} className="input-field">
// //             <option value="+">+</option>
// //             <option value="-">-</option>
// //             <option value="*">*</option>
// //             <option value="/">/</option>
// //           </select>
// //         </div>
// //         <button onClick={handleCalculate} className="calculate-button">
// //           Calculate
// //         </button>
// //         {showResult && <p className="result">Result: {result}</p>}
// //       </form>
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState('');
//   const [incrementValue, setIncrementValue] = useState(1);
//   const [decrementValue, setDecrementValue] = useState(1);

//   const handleIncrement = () => {
//     setCount(count + incrementValue);
//   };

//   const handleDecrement = () => {
//     setCount(count - decrementValue);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleIncrementValueChange = (e) => {
//     setIncrementValue(parseInt(e.target.value, 10));
//   };

//   const handleDecrementValueChange = (e) => {
//     setDecrementValue(parseInt(e.target.value, 10));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setCount(parseInt(inputValue, 10));
//   };

//   return (
//     <div className="app">
//       <h1 className="counter">Counter : {count}</h1>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a number"
//           className="input-field"
//         />
//         <button type="submit" className="btn">
//           Set
//         </button>
//       </form>
//       <div className="increment-decrement-options">
//         <label>
//           Increment by :
//           <input
//             type="number"
//             value={incrementValue}
//             onChange={handleIncrementValueChange}
//             className="input-field"
//           />
//         </label>
//         <label>
//           Decrement by :
//           <input
//             type="number"
//             value={decrementValue}
//             onChange={handleDecrementValueChange}
//             className="input-field"
//           />
//         </label>
//       </div>
//       <div className="btn-group">
//         <button onClick={handleIncrement} className="btn increment">
//           +
//         </button>
//         <button onClick={handleDecrement} className="btn decrement">
//           -
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import About from './components/page/about.js'
import Blog from './components/page/blog.js'
import Contact from './components/page/contact.js'
import Home from './components/page/home.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
