import React, {Component} from "react"
import Buton from "./buton";


const style = {
    wrap: {
        width: "485px",
        height: "245px",
        // marginTop:"250px",
        marginBottom:"150px",
        marginRight:"120px"
    },
    h1: {
        marginBottom:"40px"
    },

};


class Text extends Component {
    render() {

        return (
            <div style={style.wrap}>
                <h1 style={style.h1}>We Design and Develop</h1>
                <p style={style.h1}>We are a new design studio based in USA. We have over
                    20 years of combined experience, and know a thing or two
                    about designing websites and mobile apps.</p>
                <Buton title={"CONTACT US"} link={"#contact"}/>


            </div>
        )

    }

}

export default Text