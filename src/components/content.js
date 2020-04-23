import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export class Content extends Component {
    render() {
        return (
            <div id="content">
                <div id="tagslist">
                    <ul>
                        <li class="tag"><a href="#">Tag1</a></li>
                        <li class="tag"><a href="#">Tag2</a></li>
                        <li class="tag"><a href="#">Tag3</a></li>
                        <li class="tag"><a href="#">Tag4</a></li>
                    </ul>
                </div>
                <p>STUFF</p>
                <p>STUFF</p>
                <p>STUFF</p>
                <p>STUFF</p>
                <p>STUFF</p>
                <p>STUFF</p>
            </div>
        );
    }
}

export default Content;