import React, { Component } from 'react'
import axios from 'axios'

import Menu from './Menu'
import Weather from './Weather'

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
        return (
            <div>
                <Menu handleClick={ this.handleClick }/>
                { this.state.list.map((item) => <Weather item={item} />) }
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
