import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 80,
            quiz: 36,
            amt: 115
        },
        {
            name: "Page B",
            marks: 45,
            quiz: 36,
            amt: 112
        },
        {
            name: "Page C",
            marks: 96,
            quiz: 45,
            amt: 115
        },
        {
            name: "Page D",
            marks: 55,
            quiz: 66,
            amt: 115
        },
        {
            name: "Page E",
            marks: 85,
            quiz: 48,
            amt: 114
        },
        {
            name: "Page F",
            marks: 78,
            quiz: 42,
            amt: 113
        },
        {
            name: "Page G",
            marks: 40,
            quiz: 35,
            amt: 115
        }
    ];
    return (
        <div className="">
            <LineChart width={800} height={600} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default AssignmentMarks;