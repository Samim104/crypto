import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Context from "./Context"
import Axios from 'axios'
const ContextProvider = (props) => {
    const [Data, setData] = useState()
    useEffect(() => {
        Getdata()
    }, [])

    const Getdata = async () => {
        const res = await Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
            headers: {
                "Content-Type": "application/json"
            }
        })

        setData(res.data)

    }
    return (
        <Context.Provider value={Data}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider
