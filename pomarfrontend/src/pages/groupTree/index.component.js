import React, { Component } from 'react';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class IndexGroupTree extends Component {

  constructor(props) {
      super(props);
      this.state = {grouptree: []};
    }
    componentDidMount(){
      axios.get('https://localhost:5001/GroupTree')
        .then(response => {
          this.setState({ grouptree: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.grouptree.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">GroupTree List</h3>
          <thead>
            <tr>
              <th colSpan="2">
                <td>
                  <Link to={"/groupTree/createGroupTree/"} className="btn btn-primary">Incluir</Link>
                </td>
              </th>
            </tr>
          </thead>           
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>                
                <th>Information</th>          
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