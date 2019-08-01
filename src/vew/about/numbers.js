import React, {Component} from 'react';
import NumComponent from "./numComponent";
import bag from "./bag.png";
import star from "./star.png";
import heart from "./heart.png";
import clock from "./clock.png";

class Numbers extends Component {
    render() {
        return (
            <div className={"numbers"}>
             <NumComponent img={bag} name={"project completed"} num={"548"}/>
                <NumComponent img={clock} name={"working hours"} num={"1465"}/>
                <NumComponent img={star} name={"positive feedbacks"} num={"612"}/>
              <NumComponent img={heart} name={"happy client"} num={"735"}/>



            </div>
        );
    }
}

export default Numbers;