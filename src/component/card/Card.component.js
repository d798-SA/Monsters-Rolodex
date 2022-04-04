import { Component } from "react";
import "./Card.styles.css";

class Card extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div key={id} className="card-container">
              <img
                alt={`this monster is ${name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />

              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Card;
