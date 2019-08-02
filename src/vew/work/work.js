import React, {Component} from 'react';
import Works from "./works";

import "./work.css";
import LoadWork from "./loadWork";




class Work extends Component {

    state={
        works:[
        {pic:require("./grey.png")},
        {pic:require("./lightgrey.png")},
        {pic:require("./grey.png")},
        {pic:require("./lightgrey.png")},
        {pic:require("./lightgrey.png")},
        {pic:require("./work.png")},
        {pic:require("./lightgrey.png")},
        {pic:require("./grey.png")},

        ]
    };

// action=(data)=>{
//     this.setState({works: this.state.works.push({pic:require(data)})})
//     console.log(this.state.works)
// };

    render() {

        return (
            <section id="work" className={"workMain"}>
               <Works works={this.state.works}/>
               <LoadWork action={this.action}/>
            </section>
        );
    }
}

export default Work;