import { Component } from "react";
import './index.css'

class App extends Component{
  constructor(){
    super();
    this.state={
      name:'siwema',
      age:20,
      organisation:'Jriit',
    }
  }

  render(){
    return(
      <div>
        <p>Hello my name is {this.state.name} i'am {this.state.age} years old and i work at {this.state.organisation}</p>
        
        </div>
    )
  }
}

export default App;