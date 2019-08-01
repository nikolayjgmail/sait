import React, {Component} from 'react';
const style={
    width:"25%",
    height:"300px",

}



class Works extends Component {
    render() {
        return (
            <div className={"work"}>
                {
                    this.props.works.map((el, key)=>{

                        return(
                            <img style={style} key={key} src={el.pic} alt=""/>

                            


                        )
                    })
                }

            </div>
        );
    }
}

export default Works;






