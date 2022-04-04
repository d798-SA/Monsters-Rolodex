import { Component } from "react";
import Card from "../card/Card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        <Card monsters={monsters} />
      </div>
    );
  }
}

export default CardList;
