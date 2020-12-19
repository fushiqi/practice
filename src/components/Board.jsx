import React, { Component } from "react";
import Square  from "./Square";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            square: Array(9).fill(null),
        }
    }

    handleClick = (i) => {
        const square = this.state.square.slice();
        square[i] = "X";
        this.setState({square : square});
    }


    renderSquare(i) {
        return(
            <Square
                value={this.state.square[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }


    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)};
                    {this.renderSquare(1)};
                    {this.renderSquare(2)};
                </div>

                <div className="board-row">
                    {this.renderSquare(3)};
                    {this.renderSquare(4)};
                    {this.renderSquare(5)};
                </div>
                <div className="board-row">
                    {this.renderSquare(6)};
                    {this.renderSquare(7)};
                    {this.renderSquare(8)};
                </div>
            </div>
        )
    }
}

export default Board;