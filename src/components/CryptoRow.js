import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import Coin from './Coin';

const CryptoRow = props => {
    //initialize state
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    
    //run on render
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response => {
            setCoins(response.data);
        }).catch(err => console.log(err))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    };

    //map through each coin to output them on screen
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" 
                    placeholder="Search" 
                    className="coin-input" 
                    onChange={handleChange}/>
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}/>
                )
            })}
        </div>
    );
};

export default CryptoRow;