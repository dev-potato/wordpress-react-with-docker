import React, { Component } from 'react';
import './App.scss';
import {routes} from './Components/Routes';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import { BrowserRouter, Route } from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
    }

  }

  handleLoaderUpdate = () => {
    this.setState({
      isLoading: false
    })
  }

  updateParentLoaderStart = () => {
    this.setState({
      isLoading: true
    })
  }
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Header 
          isLoading={this.state.isLoading}
          updateParent={this.updateParentLoaderStart}/>
        <div className="router-wrapper">
         { routes.map( ({path, component: C, i }) => (
           <Route
             key={i} 
             exact path={path}
             render={ (props) => 
              <C 
                stopLoader={this.handleLoaderUpdate}
                startLoader={this.updateParentLoaderStart}
                {...props}/>
          } 
              />
         ))}
        </div>
        <Footer />
       </BrowserRouter>
      </div>
    );
  }
}

