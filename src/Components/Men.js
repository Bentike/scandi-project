import React, {Component} from "react";
import Navbar from "./Navbar";
import Product from "./Product";

class Men extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Men Category</h1>
            </div>
        );
    }
}

export default Men;