import React, {Component} from 'react';

const style={
    wrap:{
        width:"505px",
        height:"110px",
        textAlign:"center",
margin:"auto"

    }

};



class TextProcess extends Component {
    render() {
        return (

            <div style={style.wrap} className={"textProcess"}>
                <h1 >Our Work Process</h1>
                <p style ={{marginTop:"40px"}}>Was years it seasons was there form he in in them together over that,
                    third sixth gathered female creeping bearing behold years.</p>
              </div>

        );
    }
}

export default TextProcess;