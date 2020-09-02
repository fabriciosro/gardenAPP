import React, { Component } from 'react';
import axios from 'axios';

export default class EditGroupTree extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);    
    this.onChangeInformation = this.onChangeInformation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      information: ''
    }
  }

  componentDidMount() {
    axios.get('https://localhost:5001/GroupTree/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                id: response.data.id,
                name: response.data.name,
                information: response.data.information });
          })
          .catch(function (error) {
              console.log(error);
          })
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
      id: this.state.id,
      name: this.state.name,
      information: this.state.information
    };

    console.log(obj);
    console.log(this.props.match.params.id);

    axios.put('https://localhost:5001/GroupTree/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update GroupTree</h3>
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
                      value="Update GroupTree" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}