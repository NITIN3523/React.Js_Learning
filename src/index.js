import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Ard from './component/Covid/CovidTable'


// ReactDOM.render(
//     <Ard/>,
//     document.getElementById("root")
// )

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <BrowserRouter>
    <Ard/>
    </BrowserRouter>
);