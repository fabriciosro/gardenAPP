import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTree extends Component {
  constructor(props) {
    super(props);
    this.onChangeInformation = this.onChangeInformation.bind(this);
    this.onChangeSpecieId = this.onChangeSpecieId.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);     
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      information: '',
      specieId: 0,
      treeAge: ''
    }
  }
  onChangeInformation(e) {
    this.setState({
      information: e.target.value
    });
  }

  onChangeSpecieId(e) {
    this.setState({
      specieId: e.target.value
    });
  }

  onChangeAge(e) {
    this.setState({
      treeAge: e.target.value
    });
  }  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      information: this.state.information,
      specieId: this.state.specieId,
      treeAge: this.state.treeAge
    };
    axios.post('https://localhost:5001/Tree', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      information: '',
      specieId: 0,
      treeAge: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Tree</h3>
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
                    <label>Specie:  </label>
                    <input 
                      type="value" 
                      className="form-control" 
                      value={this.state.specieId}
                      onChange={this.onChangeSpecieId}
                      />
                </div>             
                <div className="form-group">
                    <label>Age:  </label>
                    <input 
                      type="Date" 
                      className="form-control" 
                      value={this.state.treeAge}
                      onChange={this.onChangeAge}
                      />
                </div>                
                <div className="form-group">
                    <input type="submit" 
                      value="Register Tree" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}