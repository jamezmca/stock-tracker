import React, { useEffect, useState } from 'react';

const StockRow = props => {
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);

    const tickerName = props.ticker;
    useEffect(() => {
        fetchStock(tickerName);
    });

    const fetchStock = (tickerName) => {
        const API_KEY = '9OLZU016V28ZXD4X';
        let StockSymbol = tickerName;
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;


        fetch(API_CALL)
            .then((response) => response.json())
            .then((data) => {
                for (let key in data['Time Series (5min)']) {
                    setXValues(xValues => [...xValues, key]);
                    setYValues(yValues => [...yValues, data['Time Series (5min)'][key]['1. open']]);
                };
                //console.log(xValues);
            });
    };


    return (
        <tr>
            <td>{props.ticker.toUpperCase()}</td>
            <td>{ yValues[0] }</td>
            <td>{ xValues[0] }</td>
        </tr>
    );
};

export default StockRow;