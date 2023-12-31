import { Component } from "react";
import './index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: '',
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState((state, props) => {
          return { monsters: users }

        }, () => {
          console.log(this.state)
        })
      })
  }

  render() {
    const filterdMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className='app'>
        <input 
          className='input-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event)=> {
          const searchField = event.target.value.toLocaleLowerCase();
        

          this.setState(()=> {
            return{
              searchField
            }
          })
        }} />

        {
          filterdMonsters.map((monster)=>{
            return(
              <div key={monster.id}>
                <h1>{monster.name}</h1>

              </div>
            )
          })
        }

      </div>
    )
  }

}




export default App;