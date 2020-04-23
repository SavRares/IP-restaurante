import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemPicture: props.itemPicture,
            itemName: props.itemName,
            itemDescription: props.itemDescription,
            itemPrice: props.itemPrice
        }
    }

    render() {
        return (
            <div id="menuitem">
                <div class="photo">
                    <Image src={this.state.itemPicture} alt={"Item Picture"} fluid/>
                </div>
                <div class="utility">
                    <h4 class="name">{this.state.itemName}</h4>
                    <h4 class="price">{this.state.itemPrice} lei</h4>
                    <p>{this.state.itemDescription}</p>
                </div>
            </div>
        )
    }
}

export default Item;