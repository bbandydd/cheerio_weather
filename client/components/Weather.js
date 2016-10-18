import React from 'react'

const Weather = ({ item }) => {
    return (
        <div key={ item.id }>
            { item.city }
            { item.temperature }
            { item.rainProbability }
            { item.weather }
            <img src={item.weatherImg} alt="" />
        </div>
    )
}

export default Weather
