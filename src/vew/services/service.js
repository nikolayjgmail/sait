import React, {Component} from 'react';
const style={
    wrap:{
        width:"21%",
        height:"145px",
        textAlign:"center",
    }

}



class Service extends Component {
    render() {
        return (

            <div style={style.wrap}>

                <a href={this.props.link}>
                <img src={this.props.img} alt=""/>

                <h4>{this.props.title}</h4>
                    <br/>
                <p>{this.props.text}</p>
                </a>

                </div>

        );
    }
}

export default Service;