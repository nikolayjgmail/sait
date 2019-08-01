import React, {Component} from 'react';

class Linkk extends Component {
    render() {
        return (
            <div style={{margin:"7px"}}>
                <a style={{color:"white"}} href={this.props.link}>{this.props.title}</a>
            </div>
        );
    }
}

export default Linkk;