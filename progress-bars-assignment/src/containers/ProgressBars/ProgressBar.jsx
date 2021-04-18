import React from "react";
import{Flex,Box} from '@rebass/grid';
import './ProgressBar.scss';

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width1: 0,
        width2: 0,
        width3: 0,
        width4: 0
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const value =  event.target.value;
      const name = event.target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleClickToIncrement(e,buttonValue,selectedprogress) {
        if(selectedprogress==='progressBar1'){
            this.setState(state => {
                return { width1: state.width1 + buttonValue };          
            });
        }
        else if(selectedprogress==='progressBar2'){
            this.setState(state => {
                return { width2: state.width2 + buttonValue };        
            });
        } 
        else if(selectedprogress==='progressBar3'){
            this.setState(state => {
                return { width3: state.width3 + buttonValue };        
            });
        } 
        else if(selectedprogress==='progressBar4'){
            this.setState(state => {
                return { width4: state.width4 + buttonValue };        
            });
        }   
    }

    handleClickToDecrement(e,buttonValue,selectedprogress) {
        if(selectedprogress==='progressBar1'){
            this.setState(state => {
                if (state.width1 - buttonValue <0) {
                    return { width1: 0};
                }
                return {         
                    width1: state.width1 - buttonValue };
                });
        }

        else if (selectedprogress==='progressBar2'){
            this.setState(state => {
                if (state.width2 - buttonValue <0) {
                    return { width2: 0};
                }
                return {         
                    width2: state.width2 - buttonValue };
                });    
        }

        else if (selectedprogress==='progressBar3'){
            this.setState(state => {
                if (state.width3 - buttonValue <0) {
                    return { width3: 0};
                }
                return {         
                    width3: state.width3 - buttonValue };
                });    
        }

        else if (selectedprogress==='progressBar4'){
            this.setState(state => {
                if (state.width4 - buttonValue <0) {
                    return { width4: 0};
                }
                return {         
                    width4: state.width4 - buttonValue };
                });    
        }
    }
  
    render() {
        const {selectProgress}=this.props;

        const mainProgressBar = {
            backgroundColor: "lightgrey",
            height: 25,            
            borderRadius: 50,
            marginLeft: 20,
            marginRight: 20,
            marginBottom:50
          }
        
          const progressActivity1 = {
            height: '100%',
            width: this.state.width1 >230 ? '100%':`${(this.state.width1/230)*100}%`,
            backgroundColor: this.state.width1 >230 ? 'red':'lightgreen',
            borderRadius: 'inherit'
          }

          const progressActivity2 = {
            height: '100%',
            width: this.state.width2 >230 ? '100%':`${(this.state.width2/230)*100}%`,
            backgroundColor: this.state.width2 >230 ? 'red':'lightgreen',
            borderRadius: 'inherit',
            textAlign: 'center'
          }

          const progressActivity3 = {
            height: '100%',
            width: this.state.width3 >230 ? '100%':`${(this.state.width3/230)*100}%`,
            backgroundColor: this.state.width3 >230 ? 'red':'lightgreen',
            borderRadius: 'inherit',
            textAlign: 'center'
          }        
          
          const progressActivity4 = {
            height: '100%',
            width: this.state.width4 >230 ? '100%':`${(this.state.width4/230)*100}%`,
            backgroundColor: this.state.width4 >230 ? 'red':'lightgreen',
            borderRadius: 'inherit',
            textAlign: 'center'
          }
      return (
          <React.Fragment>
            <div style={mainProgressBar} >
                <div style={progressActivity1}>
                    <span className="progress-value">{this.state.width1}</span>
                </div><br/>
            </div>
            <div style={mainProgressBar} >
                <div style={progressActivity2}>
                    <span className="progress-value">{this.state.width2}</span>
                </div><br/>
            </div>
            <div style={mainProgressBar} >
                <div style={progressActivity3}>
                    <span className="progress-value">{this.state.width3}</span>
                </div><br/>
            </div>
            <div style={mainProgressBar} >
                <div style={progressActivity4}>
                    <span className="progress-value">{this.state.width4}</span>
                </div><br/>
            </div>
            <Flex flexDirection="row">
                <Box flex="1">
                    <button className="buttonStyles" onClick={(e) => { this.handleClickToDecrement(e,13,selectProgress); }}>-13</button>&nbsp;     
                    <button className="buttonStyles" onClick={(e) => { this.handleClickToDecrement(e,18,selectProgress); }}>-18</button>&nbsp;   
                    <button className="buttonStyles" onClick={(e) => { this.handleClickToIncrement(e,10,selectProgress); }}>+10</button>&nbsp;            
                    <button className="buttonStyles" onClick={(e) => { this.handleClickToIncrement(e,38,selectProgress); }}>+38</button>&nbsp; 
                </Box>
            </Flex>
        </React.Fragment>
      );
    }

  }

  export default ProgressBar;