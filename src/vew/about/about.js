import React, {Component} from 'react';
import './about.css';

import Skils from "./skils";
import TextAbout from "./textAbout";
import Numbers from "./numbers";

class About extends Component {
    render() {
        return (
            <section id="about">
                <TextAbout/>
                <Skils/>
                <Numbers/>
            </section>
        );
    }
}

export default About;