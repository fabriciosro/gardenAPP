import React, { Component } from 'react';
import api from '../../services/api';

export default class CreateSpecie extends Component {
  constructor(props) {
    super(props);
    this.onChangeInformation = this.onChangeInformation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      information: '',
    }
  }
  onChangeInformation(e) {
    this.setState({
      information: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      information: this.state.information,
    };
    api.post('/Specie', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      information: '',
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Specie</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Information:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.information}
                      onChange={this.onChangeInformation}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register Specie" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}