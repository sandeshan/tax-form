import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

// Three parts of the Form split into different Components
// for easy readability and maintenance.
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';

import { Step, Stepper, StepButton} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';

class App extends Component {

  constructor() {
    super();

    // stepIndex = 0 makes first step of "Stepper" active.
    this.state = {
      stepIndex: 0,
      showSnackbar: false
    };
  }
  
  // Below two functions handle Back/Next Buttons
  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  // Show snackbar on click of 'Submit'
  handleSubmit = () => {
    this.setState({
      showSnackbar: true
    });
  };

  // Hide snackbar after auto-close duration
  handleSnackbarClose = () => {
    this.setState({
      showSnackbar: false
    });
  };

  // Render Stepper content based on selected Step
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FormPart1/>;
      case 1:
        return <FormPart2 />;
      case 2:
        return <FormPart3 />;
      default:
        return 'Nothing to see here!';
    }
  }

  render() {

    // Get selected step index from current 'state'.
    const { stepIndex } = this.state;

    return (
      // MuiThemeProvider injects the required theme for Material-UI Components to work.
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <div className="App-title"><b>Schedule K-1 (Form 1065)</b></div>
            <IconButton 
            tooltip="Click to see Instructions" 
            href="http://sandeshnaik.com/files/tax-form-instructions.pdf" 
            target="_blank"
            style={{ marginTop: "-8px"}} 
            className="help-btn">
              <HelpIcon />
            </IconButton>            
            <div className="Header-year"><span className="year-span">20</span><b>17</b></div>
          </div>
          <div className="content">
            <div className="form-main-div">
              <Stepper linear={false} activeStep={stepIndex}>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                    Part 1
                  </StepButton>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                    Part 2
                  </StepButton>
                </Step>
                <Step>
                  <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                    Part 3
                  </StepButton>
                </Step>
              </Stepper>
              <div>
                {this.getStepContent(stepIndex)}                
                <Snackbar
                  open={this.state.showSnackbar}
                  message="Form Submission Successful !"
                  autoHideDuration={4000}
                  onRequestClose={this.handleSnackbarClose}
                />
              </div>
            </div>            
          </div>
          <div className="App-footer">
            <div className="footer-btns">
              <FlatButton
                label="Previous"
                secondary={true}
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
              />
              <RaisedButton
                label="Next"
                disabled={stepIndex === 2}
                primary={true}
                onClick={this.handleNext}
              />              
              <RaisedButton 
              label="Submit"
              backgroundColor="#4CAF50"
              labelColor="#ffffff"
              style={{ float: 'right' }} 
              disabled={this.state.stepIndex < 2}
              onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
