import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Moment from 'moment';

class TableRowTree extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        api.delete('/Tree/'+this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.information}
          </td>
          <td>
            {this.props.obj.specieId}
          </td>
          <td>
            {Moment(this.props.obj.treeAge).format('DD/MM/YYYY')}            
          </td>                    

          <td>
            <Link to={"/Tree/EditTree/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRowTree;