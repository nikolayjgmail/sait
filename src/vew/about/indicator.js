import React, {Component} from 'react';


const style={
    wrap:{
        width:"80%",
        height:"5px",
        backgroundColor:"#d8d8d8",
        marginTop:"20px"
    },
    name:{
        marginTop:"20px",
        marginBottom:"20px",
    },
    indicator:{
        paddingLeft:"10%"

    }

};



class Indicator extends Component {
    render() {


        return (
            <div style={style.indicator}>
                <h5 style={style.name}>{this.props.name} {this.props.val}%</h5>

                <div style={style.wrap}><div style = {{
                    width: `${this.props.val}%`,
                    height: "5px",
                    backgroundColor: "#10c9c3"
                }}></div></div>

            </div>
        );
    }
}

export default Indicator;