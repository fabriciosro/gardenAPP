import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Moment from 'moment';

class TableRowHarvest extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        api.delete('/harvest/'+this.props.obj.id)
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
            {Moment(this.props.obj.harvestDate).format('DD/MM/YYYY')}
          </td>
          <td>
            {this.props.obj.grossWeight}
          </td>
          <td>
            {this.props.obj.treeId}
          </td>
 
          <td>
            <Link to={"/harvest/EditHarvest/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRowHarvest;