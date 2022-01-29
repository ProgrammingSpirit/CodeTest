import './App.css';
import React, { Component } from 'react';
import quiz from './components/quiz.json'
import BootstrapTable from 'react-bootstrap-table-next';
import './style.css';
import filterFactory, { numberFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { expandRow, Caption } from './components/Functions';
import { quizData } from './components/Chart.js';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const headerSortingStyle = { backgroundColor: '#c8e6c9' };

const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true,
    headerSortingStyle,
}, {
    dataField: 'age',
    text: 'Age',
    sort: true,
    headerSortingStyle,
    filter: numberFilter(),
}, {
    dataField: 'gender',
    text: 'Gender',
    sort: true,
    headerSortingStyle,
}, {
    dataField: 'car_make',
    text: 'Car Make',
    sort: true,
    headerSortingStyle,
}];

class App extends Component {
    render() {
        return (
            <div className="App" style={{
                backgroundImage: 'url(https://img.wallpapersafari.com/desktop/1920/1080/55/22/P5ABoL.jpg)',
                backgroundAttachment: 'fixed',
                width: '100%',
                height: '100%',
                color: "#f5f5f5",
            }} >

                <BootstrapTable
                    keyField='name'
                    data={quiz}
                    className="top"
                    bootstrap4
                    columns={columns}
                    caption={<Caption />}
                    striped
                    hover
                    condensed
                    filter={filterFactory()}
                    pagination={paginationFactory()}
                    expandRow={expandRow}
                    horizontal-align
                />
                <BarChart
                    width={1380}
                    height={769}
                    data={quizData}
                    margin={{
                        top: 70,
                        left: 0,
                        bottom: 90,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: "X-Axis = Age Groups", dy: 60, fontSize: 22 }} />
                    <YAxis label={{ value: "Y-Axis = Car Count", dx: -20, fontSize: 22, angle: -90 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="blue" />
                    <Bar dataKey="female" fill="maroon" />
                    <Bar dataKey="bigender" fill="#83ca2d" />
                    <Bar dataKey="polygender" fill="#8c6d27" />
                    <Bar dataKey="genderqueer" fill="#225522" />
                    <Bar dataKey="nonbinary" fill="#5522dd" />
                    <Bar dataKey="genderfluid" fill="black" />
                    <Bar dataKey="agender" fill="#28aa22" />
                </BarChart>

            </div>

        );
    }
}

export default App;
