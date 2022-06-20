import React from 'react'

export const StockOverview = (props) => {
    const {data : stock} = props
  return (
    <div style={...props.style}>
            <h2>Data</h2>
            {/*JSON.stringify(data)*/}
            {data.length > 0 ? data.map(stock => {return (
                    <div key={stock.id} style={{border: "1px solid grey", marginTop: 10, borderRadius:5}}>
                        <h3>{stock.symbol} style = {stock.Exchange}</h3>
                        <p>{stock.Name}</p>
                        <p>Market Cap: ${stock.MarketCapitalization.toLocaleString('us')}</p>
                </div>
            )}) : null}
        </div>
  )
}
