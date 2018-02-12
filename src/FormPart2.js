import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

// Content for Part 2 of Stepper 
class FormPart2 extends Component {

    render() {

        return (
            <div style={{ width: '100%' }}>
                <Card>
                    <CardHeader
                        title="Part II"
                        subtitle="Information About the Partner" />
                    <CardText className='form-2-content'>
                        <div className='form2-div-1'>
                            <form>
                                <Paper zDepth={1} className="field-group">
                                    <TextField
                                        hintText=""
                                        floatingLabelText="Partner’s identifying number"
                                        fullWidth={true}
                                    /><br /><br />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="Partner’s name, address, city, state, and ZIP code"
                                        fullWidth={true}
                                        multiLine={true}
                                        rows={3}
                                    /><br /><br /><br /><br />
                                </Paper>
                                <br />
                                <Paper zDepth={1} className="field-group">
                                    <RadioButtonGroup name="g-group" defaultSelected={false} className="field-separator">
                                        <RadioButton
                                            value="g_checkbox_1"
                                            label="General partner or LLC member-manager"
                                        />
                                        <RadioButton
                                            value="g_checkbox_2"
                                            label="Limited partner or other LLC member"
                                        />
                                    </RadioButtonGroup><br />
                                    <RadioButtonGroup name="h-group" defaultSelected={false}>
                                        <RadioButton
                                            value="h_checkbox_1"
                                            label="Domestic partner"
                                        />
                                        <RadioButton
                                            value="h_checkbox_2"
                                            label="Foreign partner"
                                        />
                                    </RadioButtonGroup>
                                    <TextField
                                        hintText=""
                                        floatingLabelText="What type of entity is this partner?"
                                        fullWidth={true}
                                    /><br /><br />
                                    <Checkbox
                                        label="If this partner is a retirement plan (IRA/SEP/Keogh/etc.), check here"
                                    /><br /><br />
                                </Paper>

                            </form>
                        </div>
                        <div className='form2-div-2'>
                            <form>
                                <Paper zDepth={1} className="field-group">
                                    <h4>Partner’s share of profit, loss, and capital</h4>
                                    <Table selectable={false} className="form-table">
                                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                            <TableRow>
                                                <TableHeaderColumn></TableHeaderColumn>
                                                <TableHeaderColumn style={{color: '#000000', textAlign: 'center'}}>Beginning</TableHeaderColumn>
                                                <TableHeaderColumn style={{color: '#000000', textAlign: 'center'}}>Ending</TableHeaderColumn>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>Profit</TableRowColumn>
                                                <TableRowColumn><TextField id="a-1" style={{ width: '85%' }} />%</TableRowColumn>
                                                <TableRowColumn><TextField id="a-2" style={{ width: '85%' }} />%</TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Loss</TableRowColumn>
                                                <TableRowColumn><TextField id="a-3" style={{ width: '85%' }} />%</TableRowColumn>
                                                <TableRowColumn><TextField id="a-4" style={{ width: '85%' }} />%</TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Capital</TableRowColumn>
                                                <TableRowColumn><TextField id="a-5" style={{ width: '85%' }} />%</TableRowColumn>
                                                <TableRowColumn><TextField id="a-6" style={{ width: '85%' }} />%</TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table><br/>
                                    <h4>Partner’s share of liabilities at year end</h4>
                                    <Table selectable={false} className="form-table">                                        
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>Nonrecourse</TableRowColumn>
                                                <TableRowColumn>$<TextField id="b-1" /></TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Qualified nonrecourse financing</TableRowColumn>
                                                <TableRowColumn>$<TextField id="b-2" /></TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Recourse</TableRowColumn>
                                                <TableRowColumn>$<TextField id="b-3" /></TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Paper><br/>
                                <Paper zDepth={1} className="field-group">
                                    <h4>Partner’s capital account analysis</h4>
                                    <Table selectable={false} className="form-table">
                                        <TableBody displayRowCheckbox={false}>
                                            <TableRow>
                                                <TableRowColumn>Beginning capital account</TableRowColumn>
                                                <TableRowColumn>$<TextField id="c-1" /></TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Capital contributed during the year</TableRowColumn>
                                                <TableRowColumn>$<TextField id="c-2" /></TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Current year increase (decrease)</TableRowColumn>
                                                <TableRowColumn>$<TextField id="c-3" /></TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Withdrawals & distributions</TableRowColumn>
                                                <TableRowColumn>$<TextField id="c-4" /></TableRowColumn>
                                            </TableRow>
                                            <TableRow>
                                                <TableRowColumn>Ending capital account</TableRowColumn>
                                                <TableRowColumn>$<TextField id="c-5" /></TableRowColumn>
                                            </TableRow>
                                        </TableBody>
                                    </Table><br/>
                                    <RadioButtonGroup name="l-group" defaultSelected={false} style={{ display: 'flex', flexWrap: 'wrap'}}>
                                        <RadioButton
                                            value="l_checkbox_1"
                                            label="Tax basis"
                                            style={{ maxWidth: 200 }}
                                        />
                                        <RadioButton
                                            value="l_checkbox_2"
                                            label="GAAP"
                                            style={{ maxWidth: 200 }}
                                        />
                                        <RadioButton
                                            value="l_checkbox_3"
                                            label="Section 704(b) book"
                                            style={{ maxWidth: 200 }}
                                        />
                                        <RadioButton
                                            value="l_checkbox_4"
                                            label="Other (explain)"
                                            style={{ maxWidth: 200 }}
                                        />
                                    </RadioButtonGroup>
                                    <TextField id="a-5" fullWidth={true} hintText="If Others, Please Explain Here" /><br /><br />
                                    <h4>Did the partner contribute property with a built-in gain or loss?</h4><br />
                                    <RadioButtonGroup name="m-group" defaultSelected={false} style={{ display: 'flex' }}>
                                        <RadioButton
                                            value="m_checkbox_1"
                                            label="Yes"
                                            style={{ maxWidth: 200 }}
                                        />
                                        <RadioButton
                                            value="m_checkbox_2"
                                            label="No"
                                            style={{ maxWidth: 200 }}
                                        />
                                    </RadioButtonGroup><br />
                                </Paper>
                            </form>
                        </div>
                    </CardText>
                </Card>
            </div>            
        );
    }
}

export default FormPart2;