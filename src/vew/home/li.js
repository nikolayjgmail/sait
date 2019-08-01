import React, {Component} from 'react';
const style={
  li: { marginTop:"10px"},



}
class Li extends Component {
    render() {
        return (

                <li style={style.li}><a style={style.a}  href={this.props.link}>{this.props.title.toUpperCase()}</a></li>

        );
    }
}

export default Li;