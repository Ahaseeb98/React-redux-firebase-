import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import green from '@material-ui/core/colors/green';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Location from './location'


class VerticalLinearStepper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            categories: '',
            schoolName: '',
            contactNo: '',
            email: '',
            socialLink: '',
            Secondary: '',
            prePrimary: '',
            primary: ''
        }

    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getSteps() {
        return ['Basic School Details', 'Facilities Offered', "Fee's Detail", 'Location'];
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return <div>
                    <TextField
                        id="standard-name"
                        label="School Name"
                        value={this.state.schoolName}
                        onChange={this.handleChange('schoolName')}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        select
                        label="Categories"
                        value={this.state.categories}
                        style={{ width: 200 }}
                        onChange={this.handleChange('categories')}
                    >
                        <MenuItem value={'Private'}>
                            Private
                        </MenuItem>
                        <MenuItem value={'Public'}>
                            Public
                        </MenuItem>
                        
                    </TextField>

                    <br />
                    <TextField
                        id="standard-name"
                        label="Contact Number"
                        value={this.state.contactNo}
                        onChange={this.handleChange('contactNo')}
                        margin="normal"
                    /><br />
                    <TextField
                        type='email'
                        id="standard-name"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    /><br />
                    <TextField
                        id="standard-name"
                        label="Website/Facebook Link"
                        value={this.state.socialLink}
                        onChange={this.handleChange('socialLink')}
                        margin="normal"
                    /><br />
                </div>;
            case 1:
                return <div>
                    <h3>Facilities Available:</h3>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.library}
                                onChange={this.handleChange('library')}
                                value="Library"
                            />
                        }
                        label="LIBRARY"
                    /><br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.ground}
                                onChange={this.handleChange('ground')}
                                value="Play Ground"
                            />
                        }
                        label="PLAY GROUND"
                    /><br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.itLab}
                                onChange={this.handleChange('itLab')}
                                value="IT Lab"
                            />
                        }
                        label="IT LAB"
                    /><br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.canteen}
                                onChange={this.handleChange('canteen')}
                                value="canteen"
                            />
                        }
                        label="CANTEEN"
                    /><br />
                   
                </div>;
            case 2:
                return <div>
                     <h3>Fees Structure:</h3>
                    <TextField
                        id="standard-name"
                        label="Pre-Primary Class Fees"
                        value={this.state.prePrimary}
                        onChange={this.handleChange('prePrimary')}
                        margin="normal"
                    /><br />
                    <TextField
                        id="standard-name"
                        label="Primary Class Fees"
                        value={this.state.Primary}
                        onChange={this.handleChange('Primary')}
                        margin="normal"
                    /><br />
                    <TextField
                        id="standard-name"
                        label="Secondary Class Fees"
                        value={this.state.Secondary}
                        onChange={this.handleChange('Secondary')}
                        margin="normal"
                    />
                </div>
            case 3:
                return <Location/>
            default:
                return 'Unknown step';
        }
    }





    render() {
        const { classes } = this.props;
        const steps = this.getSteps();
        const { activeStep } = this.state;
        console.log('this****', this.state)

        return (
            <div>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{this.getStepContent(index)}</Typography>
                                    <div>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                            >
                                                Back
                      </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleNext}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
            </Button>
                    </Paper>
                )}
            </div>
        );
    }
}


export default VerticalLinearStepper