import LoadingBar from 'react-top-loading-bar'
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state ={
    progress:10,
    
  }
  setProgress = (progress)=>
  {
    this.setState({progress:progress})
  }
  render() {
    const pageSize = 6;
    return (
      <>
        <Router>
        <Navbar/>
        <LoadingBar color='#f11946'progress={this.state.progress}/>
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="General" pageSize={pageSize} country="in" category="General"/>}></Route>
            <Route exact path="/NewsApplication" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="General" pageSize={pageSize} country="in" category="General"/>}></Route>
            <Route exact path="/Entertainment"  element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}></Route>
            <Route exact path="/Sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Sports" pageSize={pageSize} country="in" category="Sports"/>}></Route>
            <Route exact path="/Science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" pageSize={pageSize} country="in" category="Science"/>}></Route>
            <Route exact path="/Technology" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Technology" pageSize={pageSize} country="in" category="Technology"/>}></Route>
            <Route exact path="/Health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Health" pageSize={pageSize} country="in" category="Health"/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}


