import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            new Date().toLocaleString()
        )
    }
}
export default Footer;