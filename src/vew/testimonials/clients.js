import React, {Component} from 'react';

const style={
    width:"100px",
    height:"70px"
}


class Clients extends Component {
    render() {
        return (
            <div className={"clients"}>
                {
                    this.props.clients.map((el,key)=>{

                        return <img style={style} key={key} src={el} alt=""/>

                    })

                }
            </div>
        );
    }
}

export default Clients;