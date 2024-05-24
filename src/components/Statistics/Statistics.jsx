import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../../Utility/localStorage";

const Statistics = () => {

    const dataLoaded = useLoaderData();
    const dataMain = Object.keys(dataLoaded).length;
    //console.log(dataMain);

    const storeDonations = getDonationData();
    const donationsData = storeDonations.length;

    // console.log(donationsData);

    const v1 = parseFloat(((dataMain - donationsData) * 100 / dataMain).toFixed(2));
    const v2 = parseFloat(((donationsData * 100) / dataMain).toFixed(2));
    // console.log(v1);
    // console.log(v2);
    const COLORS = ['#8884d8', '#00C49F'];

    const data01 = [
        { name: 'Total Donations', value: v1 },
        { name: 'Your Donations', value: v2 }
    ];

    //console.log(data01);


    return (
        <div >
            <PieChart width={700} height={500} >
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={150} label >
                    {
                        data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Pie>
                <Legend />
            </PieChart>

        </div>
    );
};

export default Statistics;