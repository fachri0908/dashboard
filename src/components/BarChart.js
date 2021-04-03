import React,{useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment'

const Chart = (props) =>{

    const [data, setData] = useState(null)

    const getRange = (date) =>{
        let fromDate = moment(date[0])
        let toDate = moment(date[1])
        let diff = toDate.diff(fromDate, 'days')
        let range = []
        for (let i = 0; i <= diff; i++) {
            range.push(moment(date[0]).add(i, 'days'))
        }
        return range
    }

    const visualizeData = (dates)=>{
        let min = Math.ceil(1000);
        let max = Math.floor(5000);
        let barData = dates.map((el) => {
            return {
                fullDate: moment(el).format('DD/MM/YYYY'),
                date: moment(el).format('MMM D'),
                Gross: Math.floor(Math.random() * (max - min)) + min,
                Nett: Math.floor(Math.random() * (max - min)) + min,
                APV: Math.floor(Math.random() * (max - min)) + min,
                UPT: Math.floor(Math.random() * (max - min)) + min,
            }
        })
        setData(barData)   
    }

    useEffect(() => {
        let range = getRange(props.date)
        visualizeData(range)
    }, [props]);

    const monthTickFormatter = (date) => {
        return moment(date,'DD/MM/YYYY').format('MMM D')
    };

    return (
        <ResponsiveContainer>
        <div width="100%" height="100%">
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fullDate" tickFormatter={monthTickFormatter} />
                <YAxis />
                <Tooltip />
                <Legend/>
                <Bar dataKey="Gross" barSize={25} stackId="a" fill="#289e45" />
                <Bar dataKey="Nett" stackId="a" fill="#37b04d" />
                <Bar dataKey="APV" stackId="a" fill="#7ae28d" />
                <Bar dataKey="UPT" stackId="a" fill="#707070" />
            </BarChart>
        </div>
        </ResponsiveContainer>
    );
}

export default Chart
