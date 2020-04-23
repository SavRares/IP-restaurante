import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './item';
import itemPhotoTemp1 from "../Images/Ciorba.jpg";
import itemPhotoTemp2 from "../Images/Burger.jpg";
import itemPhotoTemp3 from "../Images/Caesar.jpg";



export class Menu extends Component {
    render() {
        return (
            <div id = "menu">
                <p>MENU!</p>
                <div id="items">
                    <Item itemPicture={itemPhotoTemp1} itemName={"Ciorba de perisoare"} itemDescription={"Ciorba de perisoare description"} itemPrice={12} />
                    <Item itemPicture={itemPhotoTemp2} itemName={"Burger de vita"} itemDescription={"Burger de vita description, vine cu cartofi"} itemPrice={21} />
                    <Item itemPicture={itemPhotoTemp3} itemName={"Salata Ceasar cu carne de pui"} itemDescription={"Salata, ceapa, sos Caesar, piept de pui, etc"} itemPrice={16} />
                    <Item itemPicture={itemPhotoTemp1} itemName={"Ciorba de perisoare"} itemDescription={"Ciorba de perisoare description"} itemPrice={12} />
                    <Item itemPicture={itemPhotoTemp2} itemName={"Burger de vita"} itemDescription={"Burger de vita description, vine cu cartofi"} itemPrice={21} />
                    <Item itemPicture={itemPhotoTemp3} itemName={"Salata Ceasar cu carne de pui"} itemDescription={"Salata, ceapa, sos Caesar, piept de pui, etc"} itemPrice={16} />
                    <Item itemPicture={itemPhotoTemp1} itemName={"Ciorba de perisoare"} itemDescription={"Ciorba de perisoare description"} itemPrice={12} />
                    <Item itemPicture={itemPhotoTemp2} itemName={"Burger de vita"} itemDescription={"Burger de vita description, vine cu cartofi"} itemPrice={21} />
                    <Item itemPicture={itemPhotoTemp3} itemName={"Salata Ceasar cu carne de pui"} itemDescription={"Salata, ceapa, sos Caesar, piept de pui, etc"} itemPrice={16} />


                </div>
            </div>
        );
    }
}

export default Menu;