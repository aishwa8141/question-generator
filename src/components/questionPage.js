import React , { Component ,Fragment } from  'react';
import Search from '../components/search';
import '../css/router.css';
import Navbar from './navbar'
export class questionPage extends Component {

  render(){
    return (
      <Fragment>
        <Navbar></Navbar>
        <div>
          <br/>
          <br/>
        </div>
        <Search></Search>
      </Fragment>
    )
  }
}
