import React from 'react'
import "./index.css"
function Card(props) {
  return (
    <>
      <div className="cardbox">
        <div className="cardlogoBox">
          <div className="cardlogo">
            <img src={props.img} />
          </div>
        </div>
        <div className="cardBody">
          <p>{props.name}</p>
          <p style={{ color: "grey", fontSize: "10px", marginBottom: "5px" }}>{props.symbol}</p>
          <p style={{ fontWeight: "bolder", marginBottom: "5px" }}>{props.price}inr</p>
          <p style={{ marginBottom: "5px", fontSize: '8px', color: 'grey' }}>Market Cap : {props.marketcap}</p>
          <div style={{ display: 'flex', fontSize: "6.5px", fontWeight: "bolder", alignItems: "center", justifyContent: "space-between" }}><p>24h highest : <span style={{ color: "green" }}>{props.high}</span> </p><p>24h lowest : <span style={{ color: "red" }}>{props.low}</span></p></div>

        </div>
      </div>
    </>
  )
}

export default Card