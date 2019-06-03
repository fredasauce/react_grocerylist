import React from 'react';
import List from "./List";
import GroceryForm from "./GroceryForm";
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [
        { id: 1, name: "Milk", complete: true, },
        { id: 2, name: "Bread", complete: false, },
        { id: 3, name: "Eggs", complete: false, },
      ]
    };

    this.addItem = this.addItem.bind(this);
  }

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem(name) {
    const grocery = { name, id: this.getUniqueId(), complete: false, };
    this.setState({ groceries: [grocery, ...this.state.groceries], });
  };

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete,
          }
        }
        return grocery;
      })
    })
  }

  render() {
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={this.state.groceries} todoClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
