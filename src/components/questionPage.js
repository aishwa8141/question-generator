import React ,{ Component ,Fragment } from  'react';
import Search from '../components/search';
import '../css/router.css';
import Navbar from './navbar'
export class questionPage extends Component {
   
    render() {
        return(
            <Fragment>
  {/* <div className="ui inverted menu" id="nav">
        <div className="ui container">
          <a href="/" className="header item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwox3z8V2KaTNnOuDYxxegse0JZZhvfrJBBIKFZf_6JzXIC6du" alt="no"/>
          </a>
         
            <div className="ui two wide column center aligned ">
              <h3>AI Question Generator</h3>
            </div>
         
          <div className="right menu">
    <div className="ui right aligned">
         
          <i className="rupee sign icon right-floated" id="iconrupee"></i>
        </div>
        </div>
        </div>
      </div>
<div > */}
<Navbar></Navbar>
<Search></Search>


     </Fragment>
        )
    }
}