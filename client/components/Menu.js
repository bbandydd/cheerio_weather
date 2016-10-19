import React from 'react'

const Menu = ({ names, getWeather }) => {

    let buttonNames = ['今日白天', '今晚明晨', '明日白天']

    const hours = new Date().getHours()

    if (hours >= 18 || hours <= 6) {
        buttonNames = ['今晚明晨', '明日白天', '明日晚上']
    }

    return (
        <div>
            {
                buttonNames.map((name, idx) =>
                    <button key={ idx } onClick={ () => getWeather( idx+1 ) }>{ name }</button>)
            }
        </div>
    )
}


export default Menu
