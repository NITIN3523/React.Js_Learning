import React from 'react'
export default function Challenge2() {
  return (
    <div>
      <h1>My Name is Nitin Saini</h1>
      <p>Today Date is ==  </p>
      <p>Today Date is == </p>
    </div>
  )
}

// this is not working beacuse javascript is using in html i had to pass the argument in different way.
// <p>Today Date is == {Date().toLocalDateString()}</p>
// <p>Today Date is == {Date().toLocalTimeString()}</p>
// way to do it is use to type code in index.js file 


//THE CODE IS ==>
/*
import React from 'react';
import ReactDOM from 'react-dom';

const da = new Date().toLocaleDateString();
const ti = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>My Name is Nitin Saini</h1>
    <p>Today Date is == {da}</p>
    <p>Today Date is == {ti}</p>
  </>,
  document.getElementById('root')
);
*/
