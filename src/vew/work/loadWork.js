import React, {Component} from 'react';


const style={

   width:"100%",
   height:"60px",
   backgroundColor:"#f5f5f5",
    textAlign:"center",
    paddingTop:"40px"

};


class LoadWork extends Component {
state={
data:undefined,
    prps:this.props.action
};


    render() {
        
        const test=()=>{

                let dat = document.querySelector('#testinp').value;
                this.setState({data: dat});
                // console.log(this.state.data);
                // console.log(this.state.prps);
                // this.state.prps(this.state.data)

            alert(dat)

            };

        
        return (


            <div>
                <label htmlFor="testinp">
                 <div style={style} onClick={test}>
                    <p>LOAD MORE WORK</p>
                     </div>

                </label>

            <input type="file" name="" id="testinp" onChange={test}  />

                {/*<button onClick={test}>test</button>*/}

            </div>



        );
    }
}

export default LoadWork;


{/*<div style={style} onClick={this.props.action}>*/}


{/*<div style={style} onClick={test}>*/}
{/*<p>LOAD MORE WORK</p>*/}

// </div>