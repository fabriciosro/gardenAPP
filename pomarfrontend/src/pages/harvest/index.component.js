import React, { Component } from 'react';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class IndexHarvest extends Component {

  constructor(props) {
      super(props);
      this.state = {harvest: []};
    }
    componentDidMount(){
      axios.get('https://localhost:5001/harvest')
        .then(response => {
          this.setState({ harvest: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.harvest.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Harvest List</h3>
          <thead>
            <tr>
              <th colSpan="2">
                <td>
                  <Link to={"/harvest/createHarvest/"} className="btn btn-primary">Incluir</Link>
                </td>
              </th>
            </tr>
          </thead>           
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Information</th>
                <th>Harvest Date</th>
                <th>Groess Weight</th>
                <th>Tree</th>
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