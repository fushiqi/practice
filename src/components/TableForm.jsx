import React, { Component } from "react";
import PropTypes from "prop-types";
import './TableForm.scss'

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.callBackSubmit = this.callBackSubmit.bind(this);
    }

    callBackSubmit = () => {
        const newItem = {
            text: this.state.value,
            time: Date.now()
        }
        this.props.onSubmit(event, newItem);
    }

    handleChange = (e) => {
        this.setState({value : e.target.value});
        // console.log(this.state.value);
    }

    
    

    render() {
        return(
            <form onSubmit={() => this.callBackSubmit()}>
                <label>
                    Add Todo
                    <input 
                        type="text"
                        name="todo"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <button
                    className="submit-buttons"
                    type="submit"
                >Submit</button>
            </form>
        )
    }
}

TableForm.propTypes = {
    onSubmit : PropTypes.func,
}

export default TableForm;