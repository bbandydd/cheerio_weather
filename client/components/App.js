import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component{
    constructor() {
        super()
        this.getWeather = this.getWeather.bind(this)
        this.state = {
            url: 'http://localhost:3000/getWeather/1',
            list: []
        }
    }

    componentDidMount() {
        this.getWeather(this.state.url)
    }

    render() {

        const list = this.state.list.map((obj) => {
            return <div key={ obj.id }>{ obj.city } { obj.temperature } { obj.rainProbability } { obj.weather }</div>
        })

        return (
            <div>
                { list }
            </div>
        )
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
