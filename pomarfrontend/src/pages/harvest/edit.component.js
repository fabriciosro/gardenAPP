import React, { Component } from 'react';
import api from '../../services/api';
import Moment from 'moment';

export default class EditHarvest extends Component {
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

  componentDidMount() {
    api.get('/harvest/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                id: response.data.id,
                information: response.data.information, 
                harvestDate: response.data.harvestDate,
                grossWeight: response.data.grossWeight,
                treeId: response.data.treeId });
          })
          .catch(function (error) {
              console.log(error);
          })
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
      id: this.props.match.params.id,
      information: this.state.information,
      harvestDate: Moment(this.state.harvestDate).format('DD/MM/YYYY'),
      grossWeight: this.state.grossWeight,
      treeId: this.state.treeId
    };
    api.put('/Harvest/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Harvest</h3>
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
                      placeholder="dd/mm/aaaa" 
                      className="form-control"
                      value={Moment(this.state.harvestDate).format('yyyy-MM-dd')}
                      onChange={this.onChangeHarvestDate}
                      />
                </div>
                <div className="form-group">
                    <label>Gross Weight: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.grossWeight}
                      onChange={this.onChangeGrossWeight}
                      />
                </div>
                <div className="form-group">
                    <label>Tree Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.treeId}
                      onChange={this.onChangeTreeId}
                      />
                </div>                
                <div className="form-group">
                    <input type="submit" 
                      value="Update Harvest" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}