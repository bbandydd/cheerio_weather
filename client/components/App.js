import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component{
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getWeather('/getWeather/1')
    }

    render() {

        const list = this.state.list.map((obj) => {
            return (
                <div key={ obj.id }>
                    { obj.city }
                    { obj.temperature }
                    { obj.rainProbability }
                    { obj.weather }
                    <img src={obj.weatherImg} alt="" />
                </div>
            )
        })

        let buttonNames = ['今日白天', '今晚明晨', '明日白天']

        const hours = new Date().getHours()

        if (hours >= 18 || hours <= 6) {
            buttonNames = ['今晚明晨', '明日白天', '明日晚上']
        }

        const buttons = buttonNames.map((name, idx) => {
            return (
                <button onClick={ () => this.handleClick( idx+1 ) }>{ name }</button>
            )
        })


        return (
            <div>
                { buttons }
                { list }
            </div>
        )
    }

    handleClick(status) {
        this.getWeather('/getWeather/' + status)
    }

    getWeather(url) {
        axios.get(url)
            .then((response) => {
                this.setState({
                    list: response.data
                })

                console.log('done')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
