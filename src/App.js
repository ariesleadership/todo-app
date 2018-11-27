import React, { Component } from 'react';
import ListItem from './ListItem';
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
    this.handleCkBox = this.handleCkBox.bind(this);

  }
  handleChange(e) {
    const value = e.target.value;


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
      'toDoItem.id': false,

    }

    toDoList.push(toDoItem);
    this.setState({ toDoList: toDoList })
    this.setState({ taskDes: "" });


  }

  handleCkBox(e) {
    const value = (e.target.type === 'checkbox') && e.target.checked;
    const checkBoxName = e.target.name

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
  }

  render() {

    let listArr = this.state.toDoList;
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit} onKeyPress={this.handleOnKey} >
          <input name="taskDes" onChange={this.handleChange} value={this.state.taskDes} />

          <button type="submit">Add</button>

        </form>




        <ol >
          <h1>To Do Items</h1>
          {listArr.map((elm) => {


            return (

              <ListItem name={elm.id} taskDes={elm.list} key={elm.id.toString()} onCheckBoxChange={this.handleCkBox} ckbval={elm['toDoItem.id']} />



            )
          })}
        </ol>

      </div>
    );
  }
}

export default App;
