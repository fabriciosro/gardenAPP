import React, { Component } from 'react';
import axios from 'axios';

export default class EditSpecie extends Component {
  constructor(props) {
    super(props);
    this.onChangeInformation = this.onChangeInformation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      information: ''
    }
  }

  componentDidMount() {
    axios.get('https://localhost:5001/Specie/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                id: response.data.id,
                information: response.data.information });
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      id: this.state.id,
      information: this.state.information
    };    

    axios.put('https://localhost:5001/specie/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Specie</h3>
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
                      value="Update specie" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}