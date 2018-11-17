import React, { Component } from 'react';


class ListItem extends Component {


    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        console.log("in handleChange");
        this.props.onCheckBoxChange(e);
    }

    render() {
        console.log("listItem render");
        return (
            <li >
                <input name={this.props.name} type='checkbox' onChange={this.handleChange} value={this.props.ckbval} />


                {this.props.taskDes} {this.props.time} you are here
            </li>
        );



    }
}

export default ListItem