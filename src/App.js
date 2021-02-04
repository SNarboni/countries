import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"
import Card from "./components/Card"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      inputValue:"",
    };
  }
  
  getCountry=(country)=>{
    country = this.state.inputValue
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => res.json())
    .then(countries => {
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    })
    .catch(error => alert("error"))
  };

  tkt=(e)=>{
    this.setState({
      inputValue : e.target.value
    })
  };

  render() {
    return (
    <div className="App"> 
      <header className="App-header">
        <div className="row">
        <Button onChange={this.tkt} onClick={(e)=> this.getCountry(`${this.state.inputValue}`)}>France</Button>
        </div>
        <div className="car">
          <Card 
          name = {this.state.name}
          capital = {this.state.capital}
          flag = {this.state.flag}
          population = {this.state.population}
          region = {this.state.region}
          />
        </div>
      </header>
    </div>
    );
  }
}

export default App;