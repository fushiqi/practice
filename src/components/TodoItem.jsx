import  React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            complete: false,
            value: this.props.text,
            time: this.props.time,
        }
        this.callBackSubmit = this.callBackSubmit.bind(this);

    }

    handleComplete = () => {
        this.setState({ complete : !this.state.complete });
        
    }

    handleEdit = () => {
        this.setState({ editable: !this.state.editable });
    }

    callBackSubmit = () => {
        const newItem = {
            text: this.state.value,
            time: this.state.time
        }
        console.log(newItem);
        this.props.onSubmit(event, newItem);
    }

    handleChange = (e) => {
        this.setState({value : e.target.value});
    }

    render() {
        let todoItem;
        if (!this.state.editable) {
            todoItem = 
            <div>
                <input 
                    type="checkbox" 
                    checked={this.state.complete}
                    onChange={this.handleComplete}
                    key={this.state.time}
                />
                <span>{this.state.value}</span>
                <button onClick={this.handleEdit}>Edit</button>
            </div>
        } else {
            todoItem = 
            <div>
                <form onSubmit={this.callBackSubmit}>
                    <input 
                        type="text"
                        value={this.state.value}
                        name="todo"
                        key={this.state.time}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleEdit}>Cancel</button>
                    <button type="submit" >Submit</button>
                </form>
                
            </div>            
        }
        return(
            <div>
                {todoItem}
            </div>
        )
    }
    
}

TodoItem.propTypes = {
    text : PropTypes.string,
    time : PropTypes.any,
    onSubmit: PropTypes.func
};

export default TodoItem;