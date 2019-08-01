import React,{Component} from "react"
import Header from "./header"
import Text from "./text";


const style={
    wrap:{

        width:"100%",
        height:"100vh",
        backgroundColor:"#e9e9e9",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        justifyContent:"space-between",


    }


}

class Home extends Component {
    render(){

        return(

                <section  id="home" style={style.wrap}>
                   <Header/>
                    <Text/>

                </section>

        )

    }

}

export default Home