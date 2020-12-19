import React, { Component } from "react";
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        
    }

    callBackSubmit = (event) => {
        this.props.onSubmit();
        event.preventDefault();
    }

    render() {
        const { value } = this.props;

        return (
            
            <ul>
                {value.map(item => 
                    <TodoItem 
                        text={item.text}
                        key="id"
                        time={item.time}
                        onSubmit={this.callBackSubmit.bind(this)}
                    />
                    )}
                    
            </ul>
        )
    }
}

TodoList.propTypes = {
    value : PropTypes.any,
    onSubmit: PropTypes.func
}

export default TodoList;
