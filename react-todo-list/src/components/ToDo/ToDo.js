import React from 'react';
import './ToDo.css';

class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDone: false,
        };

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        const checked = event.target.checked;

        this.setState({
            isDone: checked
        });

        const audio = new Audio('applause3.mp3');
        audio.play();
    }

    render() {
        return (
            <div className="to-do-container">
                <input type="checkbox" onChange={ this.handleCheckboxChange } />
                <span className={ this.state.isDone ? 'done' : '' }>{ this.props.item.todo }</span>
                <span className="delete" onClick={ (e) => this.props.handleDeleteItem(this.props.item.index) }>X</span>
            </div>
        );
    }
}

export default ToDo;