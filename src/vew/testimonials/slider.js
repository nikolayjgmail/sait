import React, {Component} from 'react';

const style = {

    slider: {
        width: "690px",
        height: "165px",
        overflow: "hidden"
    },

    slid: {
        width: "100%",
        textAlign: "center"
    },
    h1: {
        color: "white"
    },
    h3: {
        marginTop: "35px",
        color: "white"
    },
    btns: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
};


class Slider extends Component {
    state = {
        marg: '0',
        data: this.props.data,

    };



    render() {


        const auto = () => {
                let intr = setInterval(next, 2000)
        };




        const next = () => {
            console.log(this.state.marg)
            if (this.state.marg < this.state.data.length - 1) {
                this.setState({marg: Number(this.state.marg) + 1});
            } else {
                this.setState({marg: 0})
            }
        };

        const handleChange = (e) => {
            this.setState({marg: Number(e.target.id)})
        };




        return (
            <div className={"slider"} >
                <div style={style.slider}>
                    {/*<button  onClick={auto}>klick</button>*/}
                    <div style={{
                        width: `${this.state.data.length * 100}%`,
                        height: "100%",
                        display: "flex",
                        marginLeft: `-${this.state.marg * 100}%`,
                        transition: "0.5s"
                    }}>


                        {
                            this.state.data.map((el, key) => {
                                return (
                                    <div key={key} style={style.slid}>
                                        <h1 style={style.h1}>{el.text}</h1>
                                        <h3 style={style.h3}>{el.name}</h3>
                                    </div>
                                )

                            })
                        }
                    </div>

                </div>
                <div style={style.btns}>
                    {
                        this.state.data.map((el, key) => {
                            return (

                                <div key={key} id={key} style={{
                                    width: (key === Number(this.state.marg)) ? `12px` : `6px`,
                                    height: (key === Number(this.state.marg)) ? `12px` : `6px`,
                                    margin: "7px",
                                    backgroundColor: "white",
                                    borderRadius: "50%"
                                }} onClick={handleChange}></div>)
                        })

                    }
                </div>


            </div>
        );
    }
}

export default Slider;