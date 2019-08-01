import React, {Component} from 'react';
import signature from './signature.png';

class TextAbout extends Component {
    render() {
        return (
            <div className={"about"}>
                <h1>About Us</h1>
                <p>Divide have don't man wherein air fourth. Own itself make have night won't make.
                    A you under Seed appear which good give. Own give air without fowl moveth dry first
                    heaven fruit, dominion she'd won't very all.</p>
                <img src={signature} alt=""/>
            </div>
        );
    }
}

export default TextAbout;