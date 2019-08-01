import React, {Component} from 'react';
import play from "./play.png"
import vid from "./vid.mp4"

const style={
    wrap:{
        width:"1170px",
        height:"579px",
        backgroundColor:"#e9e9e9",
        marginTop:"55px"
    },
    video:{
        width:"1170px",
      }
};


class Player extends Component {
    state={
        play: false
    };

    render() {
        const playSw=()=>{
            this.setState({play: !this.state.play})
            let vidtest=document.getElementById("vidId");
  if(!this.state.play){

    vidtest.play()
}
else{
      vidtest.pause()
  }

        };

        return (
            <div className={"player"}>
               <div style={style.wrap}>
                   <video style={style.video} id={"vidId"} src={vid} onEnded={playSw} onClick={playSw} ></video>
                   <img style={{
                       position:"relative",
                       top:"-50%",
                       left:"50%",
                       transform:"translate(-50%,-100%)",
                       display:`${this.state.play ? "none" : "block"}`
                   }} src={play} alt="" onClick={playSw}/>
               </div>
            </div>
        );
    }
}

export default Player;