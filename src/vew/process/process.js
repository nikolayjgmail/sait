import React, {Component} from 'react';
import "./process.css"
import TextProcess from "./textProcess";
import Player from "./player";



class Process extends Component {
    render() {
        return (
            <section id="process" className={"process"}>
<div className={"wrap"}>
                    <TextProcess/>
                    <Player/>

</div>
                </section>

        );
    }
}

export default Process;