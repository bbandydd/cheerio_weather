import React, { Component } from 'react'
import axios from 'axios'

import Menu from './Menu'
import Weather from './Weather'

export default class App extends Component{
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getWeather(1)
    }

    render() {
        return (
            <div>
                <Menu getWeather={ this.getWeather }/>
                { this.state.list.map((item, idx) => <Weather key={'weather-' + idx} item={item} />) }
            </div>
        )
    }

    getWeather(status) {
        axios.get('/getWeather/' + status)
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
