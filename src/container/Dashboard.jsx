import React, {Component} from 'react';
import TodoList from '../components/TodoList';
import TableForm from "../components/TableForm";
import DropDownMenu from '../components/DropDownMenu';
import Tabs from "../components/Tabs";
    

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            list: [],
            dropdown: [
                {
                    id:0,
                    text: "USA"
                },
                {
                    id:1,
                    text: "China"
                }
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit = (event, value) => {
        // console.log(this.state.value);
        const prevState = this.state.list;
        prevState.push(value);
        this.setState({list : prevState});

        event.preventDefault(); 
    }

    handleUpdate = (event, newItem) => {
        console.log(newItem);
        // const time = newItem.time;
        // const prevState = this.state.list;
        // prevState[time] = newItem.value;

        
        event.preventDefault();
    }

    componentDidMount() {
        // const testList = [];
        // const newItem = {
        //     text: "test1",
        //     key: 15
        // }
        // testList.push(newItem);
        // this.setState({list : testList});
    }


    render() {
        return (
            <div>
                <div>
                    <a>Add a new todo</a>
                    <TableForm onSubmit={this.handleSubmit}/>
                </div>
                <div>
                    <a>Here is my simple TODO list</a>
                    <TodoList 
                        value={this.state.list}
                        onSubmit={this.handleUpdate}
                    />
                </div>
                <div>
                    <a>A sample dropdown</a>
                    <DropDownMenu title="Country DropDown" list={this.state.dropdown} multiSelected={true}/>                    
                </div>

                <div>
                    <a>A sample Tab</a>
                    <Tabs>
                    <div key={0} label="Gator"> 
                        See ya later, <em>Alligator</em>! 
                    </div> 
                    </Tabs>
                </div>                    
            </div>
        )
    }
}

export default Dashboard;