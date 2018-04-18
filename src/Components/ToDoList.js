import React, { Component } from 'react';
import Aux from '../hoc/Aux';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : '',
            list : []
        }
    }

    inputChange = (e) => {
        this.setState({
            input : e.target.value
        }, () => console.log(this.state.input))
    }

    addItem = (value) => {
        //make new arr copy
        let listArray = [...this.state.list];
        listArray.push(value);
        this.setState({
            list: listArray
        }, console.log(this.state.list))
    }
    
    render() {
        const List = [...this.state.list];
        List.map((value, index) => <li key={`uniquieKey_${index}`}>{value}</li>)
        return (
            <Aux>
                <div className="to-do-wrapper">
                    <div><input
                        autoFocus
                        type="text"
                        value={this.state.input}
                        onChange={this.inputChange}
                    /></div>
                    <div><button
                        onClick={this.addItem}
                    >X</button></div>
                </div>
                <ul>
                    {List}
                </ul>
            </Aux>
        );
    }
}