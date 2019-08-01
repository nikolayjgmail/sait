import React,{Component} from 'react';

import './App.css';
import Home from './vew/home/home';
import About from "./vew/about/about";
import Work from "./vew/work/work";
import Process from "./vew/process/process";
import Services from "./vew/services/services";
import Testimonials from "./vew/testimonials/testimonials";
import Contacts from "./vew/contacts/contacts";




class App extends Component{

  render(){

    return(
        <div>
            <Home/>
            <About/>
             <Work/>
             <Process/>
             <Services/>
             <Testimonials/>
             <Contacts/>
        </div>
    )



  }


}

export default App;
