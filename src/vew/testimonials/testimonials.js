import React, {Component} from 'react';
import "./testimonials.css"
import Slider from "./slider";
import Clients from "./clients";

import cli1 from "./1.png"
import cli2 from "./2.png"
import cli3 from "./3.png"
import cli4 from "./4.png"
import cli5 from "./5.png"





class Testimonials extends Component {
    state={
        clients:[
            `${cli1}`,`${cli2}`,`${cli3}`,`${cli4}`,`${cli5}`
        ],
        post:[
            {
                text: `“ Outstanding job and exceeded all expectations. It was a pleasure
    to work with them on a sizable first project and am looking
    forward to start the next one asap.”`,
                name:`Michael Hopkins`
            },
            {
                text: `«Отличная работа и превзошла все ожидания. Было приятно
    работать с ними над значительным первым проектом и ищу
    вперед, чтобы начать следующий как можно скорее. "`,
                name:`Майкл Хопкинс`
            },
            {
                text: `“ Outstanding job and exceeded all expectations. It was a pleasure
    to work with them on a sizable first project and am looking
    forward to start the next one asap.”`.toUpperCase(),
                name:`Michael Hopkins`.toUpperCase()
            },
    //         {
    //             text: `«Отличная работа и превзошла все ожидания. Было приятно
    // работать с ними над значительным первым проектом и ищу
    // вперед, чтобы начать следующий как можно скорее. "`,
    //             name:`Майкл Хопкинс`
    //         },
        ]
    };


    render() {
        return (
            <section id="testimonials" className={"testimonials"}>
             <Slider data={this.state.post}/>
             <Clients clients={this.state.clients}/>


            </section>
        );
    }
}

export default Testimonials;