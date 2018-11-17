import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      taskDes: '',
      toDoList: [],
      id: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const checkBoxName = e.target.type === 'checkbox' && e.target.name
    if (e.target.type === 'checkbox' && value === true) {


      let listArr = this.state.toDoList;

      let newlistArr = listArr.map((elm) => elm);
      let listArrIndex;
      newlistArr.forEach((elm, index) => {

        if (elm.id === parseFloat(checkBoxName)) {

          listArrIndex = index;

        }

      })
      newlistArr.splice(listArrIndex, 1);


      this.setState({ toDoList: newlistArr });

    }
    //this.setState({ [e.target.name]: value });
    this.setState({ taskDes: value })


  }



  handleSubmit(e) {
    e.preventDefault();

    let des = this.state.taskDes;

    if (des.trim() === "") {
      return;
    }

    let toDoList = this.state.toDoList
    let toDoItem = {
      list: this.state.taskDes,
      id: Math.random(),
      'toDoItem.id': false
    }
    toDoList.push(toDoItem);
    this.setState({ toDoList: toDoList })
    console.log(toDoList);

    this.setState({ taskDes: "" });


  }


  render() {

    console.log("render()");

    let listArr = this.state.toDoList;
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          <input name="taskDes" onChange={this.handleChange} value={this.state.taskDes} />

          <button type="submit">Add</button>

        </form>

        <ul >
          <h1>To Do Items</h1>
          {listArr.map((elm) => {
            return (

              <li key={elm.id}>
                <input name={elm.id} onChange={this.handleChange} type="checkbox" value={['elm.id']} />
                {elm.list}

              </li>
            )
          })}
        </ul>



      </div>
    );
  }
}

export default App;
