import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRowGroupTree extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://localhost:5001/GroupTree/'+this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>          
          <td>
            {this.props.obj.information}
          </td>
          <td>
            <Link to={"/groupTree/EditGroupTree/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRowGroupTree;