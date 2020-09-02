import React, { Component } from 'react';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class IndexSpecie extends Component {

  constructor(props) {
      super(props);
      this.state = {specie: []};
    }
    componentDidMount(){
      axios.get('https://localhost:5001/Specie')
        .then(response => {
          this.setState({ specie: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.specie.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Specie List</h3>
          <thead>
            <tr>
              <th colSpan="2">
                <td>
                  <Link to={"/specie/createSpecie/"} className="btn btn-primary">Incluir</Link>
                </td>
              </th>
            </tr>
          </thead>     
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
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