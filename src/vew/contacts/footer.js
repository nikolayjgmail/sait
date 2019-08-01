import React, {Component} from 'react';
import Linkk from "./link";

const style = {
    d1: {
        width: "230px",

    },
    d3: {
        width: "50px",
        height: "150px",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
    }
}


class Footer extends Component {
    state = {
        title: [
            {
                titl: "Projects",
                link: "#"
            },
            {
                titl: "About",
                link: "#"
            },
            {
                titl: "Services",
                link: "#"
            },
            {
                titl: "Carreer",
                link: "#"
            },
            {
                titl: "News",
                link: "#"
            },
            {
                titl: "Events",
                link: "#"
            },
            {
                titl: "Contact",
                link: "#"
            },
            {
                titl: "Legals",
                link: "#"
            }
        ],
        title2:[
            {
                titl: "Faceboock",
                link: "https://www.facebook.com/"
            },
            {
                titl: "Twitter",
                link: "https://twitter.com/"
            },
            {
                titl: "Instagram",
                link: "https://www.instagram.com/"
            },
            {
                titl: "Dribbble",
                link: "https://dribbble.com/"
            },
        ]
    }

    render() {
        return (
            <div className={"footer"}>

                <div style={style.d1}>
                    <h2 style={{marginBottom: "10px"}}>Proll Design, Inc. </h2>
                    <p>© 2017 Piroll. All rights reserved. Designed by robirurk.</p>
                </div>


                <div>
                    <p>hello@pirolltheme.com</p>
                    <p>+44 987 065 908</p>
                </div>


                <div style={style.d3}>
                    {
                        this.state.title.map((el, key) => {
                            return <Linkk link={el.link} title={el.titl} key={key}/>
                        })
                    }
                </div>
                <div>
                    {
                        this.state.title2.map((el, key) => {
                            return <Linkk link={el.link} title={el.titl} key={key}/>
                        })
                    }


                </div>

            </div>
        );
    }
}

export default Footer;