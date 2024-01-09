import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {
    const marksArray = [
        {
          "id": 1,
          "name": "Student 1",
          "physics": 85,
          "math": 90,
          "chemistry": 78
        },
        {
          "id": 2,
          "name": "Student 2",
          "physics": 75,
          "math": 88,
          "chemistry": 92
        },
        {
          "id": 3,
          "name": "Student 3",
          "physics": 92,
          "math": 85,
          "chemistry": 80
        },
        {
          "id": 4,
          "name": "Student 4",
          "physics": 78,
          "math": 95,
          "chemistry": 88
        },
        {
          "id": 5,
          "name": "Student 5",
          "physics": 87,
          "math": 89,
          "chemistry": 94
        },
        {
          "id": 6,
          "name": "Student 6",
          "physics": 80,
          "math": 92,
          "chemistry": 85
        },
        {
          "id": 7,
          "name": "Student 7",
          "physics": 85,
          "math": 78,
          "chemistry": 90
        },
        {
          "id": 8,
          "name": "Student 8",
          "physics": 92,
          "math": 88,
          "chemistry": 75
        },
        {
          "id": 9,
          "name": "Student 9",
          "physics": 78,
          "math": 94,
          "chemistry": 87
        },
        {
          "id": 10,
          "name": "Student 10",
          "physics": 90,
          "math": 85,
          "chemistry": 89
        },
        {
          "id": 11,
          "name": "Student 11",
          "physics": 88,
          "math": 82,
          "chemistry": 91
        },
        {
          "id": 12,
          "name": "Student 12",
          "physics": 95,
          "math": 90,
          "chemistry": 85
        }
      ];
    return (
        <div>
            
            <LineChart
            width ={1000}
            height ={300}
            data ={marksArray}>
                 <XAxis dataKey="name" />
                 <YAxis />
                <Line dataKey ="physics" stroke="blue" activeDot={{ r: 8 }}></Line>
                <Line dataKey ="math" stroke="red" activeDot={{ r: 8 }}></Line>
                <Line dataKey ="chemistry" stroke="green" activeDot={{ r: 8 }}></Line>
                

            </LineChart>
            
        </div>
    );
};

export default DashBoard;