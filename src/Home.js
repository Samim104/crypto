import React, { useContext, useState } from 'react'
import "./app.css"
import "./Components/index.css"
import Context from "./Context/Context"
import Card from "./Components/Card"
function Home() {
  const data = useContext(Context)
  const [input, setinput] = useState()
  const changeHandler = () => {
    setinput(event.target.value)
  }
  return (
    <>
      <div className="searchBar">
        <div className="inputBox">
          <input onChange={changeHandler} type="text" /><button>Search</button>
        </div>
      </div>

      <div className="mainBox">
        {data?.map((val, key) => {
          console.log(val.name.startsWith(input))
          if (val.name.startsWith(input)) {
            return <Card key={key} name={val.name} symbol={val.symbol} img={val.image} marketcap={val.market_cap} price={val.current_price} low={val.low_24h} high={val.high_24h} />
          }
      if(input===""){
        return <Card key={key} name={val.name} symbol={val.symbol} img={val.image} marketcap={val.market_cap} price={val.current_price} low={val.low_24h} high={val.high_24h} />
      }

        })}
      </div>

    </>
  )
}
export default Home