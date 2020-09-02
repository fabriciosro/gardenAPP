import React, { Component } from 'react';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class IndexTree extends Component {

  constructor(props) {
      super(props);
      this.state = {Tree: []};
    }
    componentDidMount(){
      axios.get('https://localhost:5001/Tree')
        .then(response => {
          this.setState({ Tree: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.Tree.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Tree List</h3>
          <thead>
            <tr>
              <th colSpan="2">
                <td>
                  <Link to={"/tree/createTree/"} className="btn btn-primary">Incluir</Link>
                </td>
              </th>
            </tr>
          </thead>     

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Information</th>
                <th>Specie</th>
                <th>Age</th>                                
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }