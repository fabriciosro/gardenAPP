import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateHarvest from './pages/harvest/create.component';
import EditHarvest from './pages/harvest/edit.component';
import IndexHarvest from './pages/harvest/index.component';

import CreateTree from './pages/tree/create.component';
import EditTree from './pages/tree/edit.component';
import IndexTree from './pages/tree/index.component';

import CreateSpecie from './pages/specie/create.component';
import EditSpecie from './pages/specie/edit.component';
import IndexSpecie from './pages/specie/index.component';

import CreateGroupTree from './pages/groupTree/create.component';
import EditGroupTree from './pages/groupTree/edit.component';
import IndexGroupTree from './pages/groupTree/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Garden Aplication</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/harvest/IndexHarvest'} className="nav-link">Harvests</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/tree/IndexTree'} className="nav-link">Trees</Link>
                </li> 
                <li className="nav-item">
                  <Link to={'/groupTree/IndexGroupTree'} className="nav-link">Group Tree</Link>
                </li>  
                <li className="nav-item">
                  <Link to={'/specie/IndexSpecie'} className="nav-link">Species</Link>
                </li>                                                   
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/harvest/createHarvest' component={ CreateHarvest } />
              <Route path='/harvest/EditHarvest/:id' component={ EditHarvest } />
              <Route path='/harvest/IndexHarvest' component={ IndexHarvest } />

              <Route exact path='/tree/createtree' component={ CreateTree } />
              <Route path='/tree/Edittree/:id' component={ EditTree } />
              <Route path='/tree/Indextree' component={ IndexTree } />              

              <Route exact path='/specie/createSpecie' component={ CreateSpecie } />
              <Route path='/specie/EditSpecie/:id' component={ EditSpecie } />
              <Route path='/specie/IndexSpecie' component={ IndexSpecie } /> 

              <Route exact path='/groupTree/createGroupTree' component={ CreateGroupTree } />
              <Route path='/groupTree/EditGroupTree/:id' component={ EditGroupTree } />
              <Route path='/groupTree/IndexGroupTree' component={ IndexGroupTree } />                             
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;