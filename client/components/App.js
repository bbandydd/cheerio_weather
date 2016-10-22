import React, { Component } from 'react'
import axios from 'axios'

import Menu from './Menu'
import WeatherTable from './WeatherTable'

export default class App extends Component{
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
        this.setStatus = this.setStatus.bind(this)
        this.state = {
            status: 1,
            list: []
        }
    }

    componentDidMount() {
        this.getWeather(1)
    }

    render() {
        return (
            <div>
                <Menu 
                    status={ this.state.status } 
                    getWeather={ this.getWeather } 
                    setStatus = { this.setStatus }
                />
                <WeatherTable items={ this.state.list } />
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

    setStatus(status) {
        this.setState({
            status
        })
    }
}
