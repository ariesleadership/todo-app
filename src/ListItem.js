import React, { Component } from 'react';


class ListItem extends Component {


    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {

        this.props.onCheckBoxChange(e);
    }

    render() {

        return (
            <li >
                <input name={this.props.name} type='checkbox' onChange={this.handleChange} value={this.props.ckbval} />


                {this.props.taskDes}
            </li>
        );



    }
}

export default ListItem