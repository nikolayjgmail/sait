import React,{Component} from "react"
import logo from "./logo.png"
import Li from "./li";

const style={
   wrap:{
       width:"100%",
       height:"40px",
       paddingTop:"30px",
       display:"flex",
       justifyContent:"space-between",
       alignItems:"center",
       // position:"fixed"
   },
    nav:{
       width:"625px",
        height:"40px",
        marginRight:"95px"

    },
    ul:{
       display: "flex",
        justifyContent:"space-between",
    },
    logo:{
       marginLeft:"95px"
    }

};

class Header extends Component {
    state={
        title: [
            {
                titl: "home",
                link: "#"
            },
            {
                titl: "about",
                link: "#"
            },
            {
                titl: "work",
                link: "#"
            },
            {
                titl: "process",
                link: "#"
            },
            {
                titl: "services",
                link: "#"
            },
            {
                titl: "testimonials",
                link: "#"
            },
            {
                titl: "contact",
                link: "#"
            }
        ]
    }

    render(){
const handleClick=()=>{
    window.location.href = "#home"
}
        return(
            <div  style={style.wrap}>
                <img src={logo} style={style.logo} onClick={handleClick}/>

              <nav style={style.nav}>
                  <ul style={style.ul}>
                      {
                          this.state.title.map((el, key)=>{
                            return  <Li title={el.titl} link={`#${el.titl}`} key={key}/>
                          })
                      }


                  </ul>
              </nav>

            </div>
        )

    }

}

export default Header