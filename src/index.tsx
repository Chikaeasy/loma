import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Header";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "./About";
import isProduction from "./variables/isProduction";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename={isProduction ? "loma" : ''}>
            <Header/>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/About" element={<About />}/>

                <Route path="*" element={<Navigate to={'/'} />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
