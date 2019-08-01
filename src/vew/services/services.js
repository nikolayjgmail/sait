import React, {Component} from 'react';
import "./services.css"
import Service from "./service";
import diamond from "./diamond.png";
import arc from "./arc.png";
import phone from "./phone.png";
import joy from "./joy.png";
import plane from "./plane.png";
import star from "./star1.png";
import magic from "./magic.png";
import paint from "./paint.png";

class Services extends Component {
    state={
        data:[
            {img:`${diamond}`,
                link:"#",
                title:"ui / ux design",
                text:"Be set fourth land god darkness  make it wherein own"
            },

            {img:`${arc}`,
                link:"#",
                title:"web development",
                text:"A she'd them bring void moving  third she'd kind fill"
            },

            {img:`${phone}`,
                link:"#",
                title:"app / mobile",
                text:"Dominion man second spirit he, earth they're creeping"
            },

            {img:`${joy}`,
                link:"#",
                title:"game design",
                text:"Morning his saying moveth it  multiply appear life be"
            },

            {img:`${plane}`,
                link:"#",
                title:"SEO / marketing",
                text:"Give won't after land fill creeping  meat you, may"
            },

            {img:`${star}`,
                link:"#",
                title:"photography",
                text:"BCreepeth one seas cattle grass  give moving saw give"
            },

            {img:`${magic}`,
                link:"#",
                title:"graphic design",
                text:"Open, great whales air rule for,  fourth life whales"
            },

            {img:`${paint}`,
                link:"#",
                title:"illustrations",
                text:"Whales likeness hath, man kind  for them air two won't"
            },




        ]
    };

    render() {
        return (

            <section id="services" className={"services"}>
                {
                   this.state.data.map((el, key)=>{

                   return    <Service key={key} img={el.img} title={el.title} text={el.text} link={el.link}/>
                   })
                }



            </section>
        );
    }
}

export default Services;