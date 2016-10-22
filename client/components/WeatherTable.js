import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const WeatherTable = ({ items }) => {
    const style = {
        'textAlign': 'center'
    }

    return (
        <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn style={style}>城市</TableHeaderColumn>
                    <TableHeaderColumn style={style}>氣溫</TableHeaderColumn>
                    <TableHeaderColumn style={style}>降雨機率</TableHeaderColumn>
                    <TableHeaderColumn style={style}>天氣</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                { 
                    items.map((item, idx) => {
                        return (
                            <TableRow key={'row'+idx}>
                                <TableRowColumn style={style}>{ item.city }</TableRowColumn>
                                <TableRowColumn style={style}>{ item.temperature }</TableRowColumn>
                                <TableRowColumn style={style}>{ item.rainProbability }</TableRowColumn>
                                <TableRowColumn style={style}><img src={item.weatherImg} alt={ item.weather } /></TableRowColumn> 
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>     
    )
}

export default WeatherTable
