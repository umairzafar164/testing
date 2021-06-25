import React from "react";
class App extends React.Component {
  state = { city: "", temp: null, cities: [], temps: [] };
  onSubmit = () => {
    this.setState({
      cities: [...this.state.cities, this.state.city],
      temps: [...this.state.temps, this.state.temp],
      city: "",
      temp: "",
    });
  };
  render() {
    return (
      <div>
        <label>Enter city</label>
        <input
          value={this.state.city}
          onChange={(e) => this.setState({ city: e.target.value })}
        ></input>
        <br></br>
        <label>Enter Temperature</label>
        <input
          value={this.state.temp}
          onChange={(e) => this.setState({ temp: e.target.value })}
        ></input>
        <button onClick={this.onSubmit}>Submit</button>

        <table class="ui celled table">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.cities.map(m=><td>{m}</td>)}
              {this.state.temps.map(t=><td>{t}</td>)}
              </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
}

export default App;

