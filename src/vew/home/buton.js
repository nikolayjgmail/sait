import React, {Component} from 'react';

const style={

    button:{
        color:"white",
        background:"#10c9c3",
        padding:"22px",
        // width: "180px",
        // height: "55px",
        // border:"none"

    }

};


class Buton extends Component {
    render() {

        return (
            <div>
                <a style={style.button} href={this.props.link}>{this.props.title}</a>

            </div>
        );
    }
}

export default Buton;