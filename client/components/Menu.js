import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const Menu = ({ status, getWeather, setStatus }) => {
    const style = {
        'margin': '12px'
    };

    return (
        <div>
            {
                getButtonNames().map((name, idx) =>
                    <RaisedButton 
                        key={ idx } 
                        label={name} 
                        primary={status == idx+1 ? true : false} 
                        style={style}
                        onTouchTap={ () => { getWeather(idx+1); setStatus(idx+1) } }
                    />
                )
            }
        </div>
    )
}

const getButtonNames = () => {
    let buttonNames = ['今日白天', '今晚明晨', '明日白天']

    const hours = new Date().getHours()

    if (hours >= 18 || hours <= 6) {
        buttonNames = ['今晚明晨', '明日白天', '明日晚上']
    }

    return buttonNames
}


export default Menu
