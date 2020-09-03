import React, { Component } from 'react';
import api from '../../services/api';

export default class CreateGroupTree extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeInformation = this.onChangeInformation.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      information: '',
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeInformation(e) {
    this.setState({
      information: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      information: this.state.information,
    };
    api.post('/GroupTree', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      name:'',
      information: '',
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New GroupTree</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>

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
                      value="Register GroupTree" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}