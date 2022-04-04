import React from "react";

import CardList from "./component/card-list/Card-list.component";
import SearchBar from "./component/search-bar/search-bar.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBar: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onChangeSearchBar = event => {
    this.setState({ searchBar: event.target.value.toLocaleLowerCase() });
  }

  render() {
    const filterAarry = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchBar);
    });

    return (
      <div className="App">
        <h1 className="App-title">Monster's Rolodex</h1>
        <header className="App-header">
       
          <SearchBar placeholder='mostors' className="box-most" onChangeSearchBar={this.onChangeSearchBar} />
          <CardList  monsters={filterAarry} />
          {/* 
          <input 
           type="search"
           className="search-box" 
           placeholder="Search monsters" 
          
          onChange={event => {
             this.setState({searchBar: event.target.value.toLocaleLowerCase()})
          }}
          />


          {filterAarry.map(monster => <h1 key={monster.id}>{monster.name}</h1>)} */}
        </header>
      </div>
    );
  }
}

export default App;
