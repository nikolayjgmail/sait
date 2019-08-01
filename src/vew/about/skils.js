import React, {Component} from 'react';
import Indicator from "./indicator";

class Skils extends Component {
    render() {
        return (
            <div className={"skils"}>
                <div className={"first"}>

                 <h1>Professional Skills</h1>


                 <Indicator name={"UI/UX DESIGN"} val={"75"}/>
                 <Indicator name={"WEB DEVELOPMENT"} val={"90"}/>
                 <Indicator name={"MARKETING"} val={"65"}/>


                </div>
                <div className={"second"}></div>

            </div>
        );
    }
}

export default Skils;