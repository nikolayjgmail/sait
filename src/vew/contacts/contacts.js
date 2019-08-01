import React, {Component} from 'react';
import "./contacts.css"
import Form from "./form";
import Footer from "./footer";

class Contacts extends Component {
    render() {
        return (
            <section id="contact" className={"contacts"}>
                <Form/>
                <Footer/>
            </section>
        );
    }
}

export default Contacts;