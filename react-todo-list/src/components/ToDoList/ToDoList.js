import React from 'react';
import ToDo from '../ToDo/ToDo';
import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoInput: '',
            error: ''
        };

        // this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleToDoInputChange = this.handleToDoInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    renderToDoListElements() {
        return this.props.list.map((todo, index) => {
            const item = {
                todo, // laundry
                index // 0
            };
            return <ToDo 
                    item={item} 
                    key={index} 
                    handleDeleteItem={ this.props.handleDeleteItem }
                   />
        });
    }

    // handleDeleteItem(index) {
    //     this.props.handleDeleteItem(index);
    // }

    handleToDoInputChange(event) {
        const newValue = event.target.value;

        // Right
        this.setState({
            toDoInput: newValue
        });
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.handleAdd();
        }
    }

    handleAdd() {
        const todo = this.state.toDoInput;

        if(todo) {
            this.props.onAddItem(todo);

            this.setState({
                error: ''
            });            
        }
        else {
            // alert('Input empty. Please try again!');
            this.setState({
                error: 'Input empty. Please try again!'
            });
        }

        this.setState({
            toDoInput: ''
        });
        this.nameInput.focus();
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        return (
            <div className="to-do-list-container">
                <h1>{ this.props.name }</h1>
                <div>{ this.state.error }</div>
                <div>Add ToDo:</div>
                <input 
                    type="text" 
                    value={ this.state.toDoInput }  
                    onChange={ this.handleToDoInputChange }
                    onKeyPress={ this.handleKeyPress }
                    ref={(input) => { this.nameInput = input; }} 
                />
                <button onClick={ this.handleAdd }>ADD</button>
                <div className="list">
                    { this.renderToDoListElements() }
                </div>
            </div>
        );
    }
}

export default ToDoList;