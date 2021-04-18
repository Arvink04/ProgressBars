import React from "react";
import{Flex} from '@rebass/grid';
import {ProgressBar} from '../ProgressBars/index';
import './DropDown.scss';

class DropDown extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 'progressBar1'};  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    render() {        
      return (
        <div className="border">
        <Flex flexDirection="column">
            <h1 ><strong> Progress Bars Assignment</strong><br/>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="progressBar1">#ProgressBar1</option>
                <option value="progressBar2">#ProgressBar2</option>
                <option value="progressBar3">#ProgressBar3</option>
                <option value="progressBar4">#ProgressBar4</option>
                </select>   
            </h1>     
         <ProgressBar selectProgress ={this.state.value}/>
         </Flex>
        </div>
      );
    }
  }
export default DropDown;
