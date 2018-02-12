import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

// Content for Part 3 of Stepper 
class FormPart3 extends Component {

    render() {

        return (
            <div style={{ width: '100%' }}>
                <Card>
                    <CardHeader
                        title="Part III"
                        subtitle="Partner’s Share of Current Year Income, Deductions, Credits, and Other Items" />
                    <CardText className='form-3-content'>
                        <div className='form3-div-1'>
                            <form>
                                <Paper zDepth={1} className="field-group">
                                    <TextField
                                        hintText=""
                                        floatingLabelText="1. Ordinary business income (loss)"
                                        fullWidth={true}
                                    /><br />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="2. Net rental real estate income (loss)"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="3. Other net rental income (loss)"
                                        fullWidth={true}
                                    /><br />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="4. Guaranteed payments"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="5. Interest income"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="6A. Ordinary dividends"
                                        fullWidth={true}
                                    /><br />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="6B. Qualified dividends"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="7. Royalties"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="8. Net short-term capital gain (loss)"
                                        fullWidth={true}
                                    /><br />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="9A. Net long-term capital gain (loss)"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="9B. Collectibles (28%) gain (loss)"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="9C. Unrecaptured section 1250 gain"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        hintText=""
                                        floatingLabelText="10. Net section 1231 gain (loss)"
                                        fullWidth={true}
                                    /><br />

                                    <br />11. Other income (loss)<br/>
                                    <TextField id='input-11-a1' hintText="" className= "small-text-field" underlineShow={false} />
                                    <TextField id='input-11-1' hintText="" className= "large-text-field" underlineShow={false} />
                                    <Divider className="divider"/>
                                    <TextField id='input-11-a2' hintText="" className= "small-text-field" underlineShow={false} />
                                    <TextField id='input-11-2' hintText="" className= "large-text-field" underlineShow={false} />
                                    <Divider className="divider"/>
                                    <TextField id='input-11-a3' hintText="" className= "small-text-field" underlineShow={false} />
                                    <TextField id='input-11-3' hintText="" className= "large-text-field" underlineShow={false} />
                                    <Divider className="divider"/>
                                    <TextField id='input-11-a4' hintText="" className= "small-text-field" underlineShow={false} />
                                    <TextField id='input-11-4' hintText="" className= "large-text-field" underlineShow={false} />
                                    <Divider className="divider"/>

                                    <TextField
                                        hintText=""
                                        floatingLabelText="12. Section 179 deduction"
                                        fullWidth={true}
                                    /><br /><br />

                                    <br />13. Other deductions<br />
                                    <TextField id='input-13-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-13-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-13-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-13-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-13-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-13-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-13-a4' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-13-4' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" /><br />
                                </Paper>                                
                            </form>
                        </div>
                        <div className='form3-div-2'>
                            <form>
                                <Paper zDepth={1} className="field-group">
                                    14. Self-employment earnings (loss)<br />
                                    <TextField id='input-14-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-14-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-14-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-14-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-14-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-14-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />

                                    <br />15. Credits<br />
                                    <TextField id='input-15-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-15-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-15-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-15-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-15-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-15-3' hintText="" className="large-text-field" underlineShow={false} />                                    
                                    <Divider className="divider" />

                                    <br />16. Foreign transactions<br />                                    
                                    <TextField id='input-16-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-11-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-16-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-16-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-16-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-16-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-16-a4' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-16-4' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-16-a5' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-16-5' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-16-a6' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-16-6' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />

                                    <br />17. Alternative minimum tax (AMT) items<br />
                                    <TextField id='input-17-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-17-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-17-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-17-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-17-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-17-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />

                                    <br />18. Tax-exempt income and nondeductible expenses<br />
                                    <TextField id='input-18-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-18-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-18-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-18-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-18-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-18-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />

                                    <br />19. Distributions<br />
                                    <TextField id='input-19-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-19-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-19-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-19-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-19-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-19-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />

                                    <br />20. Other information<br />
                                    <TextField id='input-20-a1' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-20-1' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-20-a2' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-20-2' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-20-a3' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-20-3' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" />
                                    <TextField id='input-20-a4' hintText="" className="small-text-field" underlineShow={false} />
                                    <TextField id='input-20-4' hintText="" className="large-text-field" underlineShow={false} />
                                    <Divider className="divider" /><br />

                                </Paper>
                            </form>
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default FormPart3;