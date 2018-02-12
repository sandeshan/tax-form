import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

// Content for Part 1 of Stepper 
class FormPart1 extends Component {  

  render() {

    return (
        <div style={{ width: '100%' }}>
            <Card>
                <CardHeader
                    title="Part I"
                    subtitle="Information About the Partnership"/>
                <CardText>
                    <form>
                        <Paper zDepth={1} className="field-group">
                            <TextField
                                hintText=""
                                floatingLabelText="Partnership’s employer identification number"
                                fullWidth={true}
                            /><br />
                            <TextField
                                hintText=""
                                floatingLabelText="Partnership’s name, address, city, state, and ZIP code"
                                fullWidth={true}
                                multiLine={true}
                                rows={2}
                            /><br />
                            <TextField
                                hintText=""
                                floatingLabelText="IRS Center where partnership filed return"
                                fullWidth={true}
                            /><br /><br />
                            <Checkbox
                                label="Check if this is a publicly traded partnership (PTP)"
                            /><br />
                        </Paper><br />                        
                    </form>
                </CardText>
            </Card>           
        </div>
    );
  }
}

export default FormPart1;