import React, {Component} from 'react';

const style={
    wrap:{
display:'flex'
    },
    info:{
        color:"white",
         marginLeft:"30px"
    },
    img:{
        width:"45px",
        height:"40px",

    }

};

class NumComponent extends Component {
    render() {
        return (
            <div style={style.wrap} className={"numComponent"}>
            <img style={style.img} src={this.props.img}/>
            <div style={style.info}>
            <p>{this.props.num}</p>
            <p>{this.props.name}</p>
            </div>
            </div>
        );
    }
}

export default NumComponent;