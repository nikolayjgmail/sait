import React, {Component} from 'react';


const style={

   width:"100%",
   height:"60px",
   backgroundColor:"#f5f5f5",
    textAlign:"center",
    paddingTop:"40px"

};


class LoadWork extends Component {


    
    render() {
        
        const test=()=>{

            
            
        }
        
        return (
            <div>
                <label htmlFor="testinp">
                 <div style={style} onClick={test}>
                    <p>LOAD MORE WORK</p>
                     </div>

                </label>
            <input type="file" name="" id="testinp"/>
            </div>



        );
    }
}

export default LoadWork;


{/*<div style={style} onClick={this.props.action}>*/}


{/*<div style={style} onClick={test}>*/}
{/*<p>LOAD MORE WORK</p>*/}

// </div>