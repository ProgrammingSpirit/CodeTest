import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-table/dist/bootstrap-table.js'
import 'bootstrap-table/dist/themes/materialize/bootstrap-table-materialize.min.css'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";



import 'bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.min.css'

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
