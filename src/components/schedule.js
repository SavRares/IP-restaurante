import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Reserve from './Reserve';
import Order from './Order'

export class Schedule extends Component {
    render() {
        return (
            <div id="schedule">
                <p>Luni: 10:30 - 22:00</p>
                <p>Marti-Vineri: 07:00 - 23:30</p>
                <p>Sambata: 10:30 - 22:00</p>
                <p>Duminica: 11:00 - 17:30</p>
                <hr></hr>
                <Reserve />
                <Order />
            </div>
        );
    }
}

export default Schedule;