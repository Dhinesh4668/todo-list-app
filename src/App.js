import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // dynomic name
  constructor(props) {
    super(props);
    this.state = {
      TodoName: "Dhinesh",
      // todo items
      TodoItems: [ 
      
      {action: "create a todo application", Done: false},
      {action: "create a todo application", Done: false},
      {action: "create a todo application", Done: false},
      {action: "create a todo application", Done: false},
      {action: "create a todo application", Done: true},
      {action: "create a todo application", Done: true},
      {action: "create a todo application", Done: true},
      {action: "create a todo application", Done: true},
      // {action: this.state.NewItemList, Done: false}
    ],
    NewItemList: ""
    };
  }

  AddNewTak =()=> {
    this.setState({NewItemList: Event.target.value});
  }

  AddTak = () =>{
    if(!this.state.TodoItems.find(item => item.action === this.state.AddNewTak)){
      this.setState({
        TodoItems: [...this.setState.TodoItems,
        {action: this.setState.NewItemList, Done: false}
        ],
        NewItemList: ''
      })
    }
  }
  changeStateData=()=> {
    this.setState({
      TodoName: this.state.TodoName === "Dhinesh" ? "Viram" : "Dhinesh"
    })
  }


  render() {
    return (
      <div>
        <h4 className="bg-primary p-4 text-white text-center b-5 align-center font-5">
          {this.state.TodoName}'s Todo List <br/> ({this.state.TodoItems.filter(t => !t.Done).length} items are remainng)
        </h4>
        <p className="text-secondary text-center">{this.state.TodoItems.filter(t => t.Done).length} items are Doned ✅</p>
        <button className="btn btn-primary m-5" onClick={this.changeStateData}>
              Change my Name🥳
        </button>


        {/* add task */}
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control" 
            value={this.setState.NewItemList}
            />
            <button className="btn btn-secondary  mt-3" onClick={this.AddTak}>ADD</button>
          </div>
        </div>



      </div>
    );
  }
}
