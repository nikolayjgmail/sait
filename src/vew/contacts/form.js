import React, {Component} from 'react';


class Form extends Component {
    state = {
        name: "",
        email: "",
        title: "",
        textarea: ""

    };


    render() {
        const go = (e) => {
            e.preventDefault();
            alert(
                `name: ${this.state.name}; 
                 email: ${this.state.email};
                 title: ${this.state.title};
                 comments: ${this.state.textarea};`
            )
        };

        const fill = (e) => {
            let key = e.target.className;
            let data = {};
            data[key] = e.target.value;
            this.setState(data)
        };


        return (
            <div className={"form"}>
                <form onSubmit={go}>
                    <div className={"textForm"}>
                        <h1>Need a Project?</h1>
                        <p>Let us know what you're looking for in an agency. We'll take a look and see
                            if this could be the start of something beautiful.</p>
                    </div>
                    <div className={"nameEmail"}>
                        <input className={"name"} placeholder={"Your Name"} type="text" onChange={fill}/>
                        <input className={"email"} placeholder={"Your Email"} type="text" onChange={fill}/>
                    </div>
                    <input className={"title"} placeholder={"Your Title"} type="text" onChange={fill}/>
                    <textarea className={"textarea"} placeholder={"Your Comment"} name="" id="" cols="30" rows="10"
                              onChange={fill}></textarea>
                    <input className={"btn"} type="submit" value={"SEND MESSAGE"}/>


                </form>
            </div>
        );
    }
}

export default Form;
