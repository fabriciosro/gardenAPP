import React, { Component } from 'react';
import api from '../../services/api';

export default class CreateHarvest extends Component {
  constructor(props) {
    super(props);
    this.onChangeInformation = this.onChangeInformation.bind(this);
    this.onChangeHarvestDate = this.onChangeHarvestDate.bind(this);
    this.onChangeGrossWeight = this.onChangeGrossWeight.bind(this);
    this.onChangeTreeId = this.onChangeTreeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      information: '',
      harvestDate: '',
      grossWeight: 0,
      treeId: 0
    }
  }
  onChangeInformation(e) {
    this.setState({
      information: e.target.value
    });
  }
  onChangeHarvestDate(e) {
    this.setState({
      harvestDate: e.target.value
    })  
  }
  onChangeGrossWeight(e) {
    this.setState({
      grossWeight: e.target.value
    })
  }
  onChangeTreeId(e) {
    this.setState({
      treeId: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      information: this.state.information,
      harvestDate: this.state.harvestDate,
      grossWeight: this.state.grossWeight,
      treeId: this.state.treeId
    };

    console.log(obj);

    api.post('/harvest', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      information: '',
      harvestDate: '',
      grossWeight: 0,
      treeId: 0
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Harverst</h3>
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
                    <label>Harvest Date: </label>
                    <input type="Date" 
                      className="form-control"
                      value={this.state.harvestDate}
                      onChange={this.onChangeHarvestDate}
                      />
                </div>
                <div className="form-group">
                    <label>Gross Weight: </label>
                    <input type="value" 
                      className="form-control"
                      value={this.state.grossWeight}
                      onChange={this.onChangeGrossWeight}
                      />
                </div>
                <div className="form-group">
                    <label>Tree: </label>
                    <input type="value" 
                      className="form-control"
                      value={this.state.treeId}
                      onChange={this.onChangeTreeId}
                      />
                </div>                
                <div className="form-group">
                    <input type="submit" 
                      value="Register harvest" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}