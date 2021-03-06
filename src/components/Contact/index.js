import React, { useState } from 'react';
import { FormControl, InputLabel, Select, TextField, Button, Grid, Paper } from "@material-ui/core";

function Contact() {
    //set state to values of all 3 form elements, update on each blur
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

    };

    //initialize error message as empty string
    const [errorMessage, setErrorMessage] = useState('');

    function validateInput(e) {
        //user input
        console.log(e.target.value);
        console.log(e.target.name);
        // setFormValues(...formValues, e.target.name: e.target.value)


        if (e.target.value === '') {
            e.target.placeholder = "must provide value"
            setErrorMessage(`${e.target.name} is required.`)

        } else {
            setErrorMessage('')
        }
    }


    function formHandler() {
        console.log("Successss");

    }

    return (
        <>
      
        
        <Grid container className="contact-form">
            
            {/* <Grid item xs={12} sm={6} component={FormControl} onSubmit={formHandler}  >

             
                <TextField
                        className="input"
                        required id="standard-required"
                        label="Name"
                        
                        margin="normal"
                        name="name"
                        type="input"
                        onBlur={validateInput}
                        onChange={handleChange}
                    />
                    <TextField
                        className="input"
                        required id="standard-required"
                        label="Email Address"
                        
                        margin="normal"
                        name="email"
                        type="email"
                        onBlur={validateInput}
                        onChange={handleChange}
                    />
                     <TextField
                    
                    label="Message"
                    multiline
                    rows={5}
                    fullWidth={true}
                    variant="outlined"
                    placeholder="message"
                    name="message"
                    onBlur={validateInput}
                    onChange={handleChange}
                />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </ Grid> */}

                <Grid item xs={12} className="contactItem">
                    <p>email me at: cpuckett9@gmail.com</p>
                </Grid>
                <Grid item xs={12} className="contactItem">
                    <p>github: <a href="https://github.com/itsclairehi">https://github.com/itsclairehi</a> </p>
                </Grid>
                <Grid item xs={12} className="contactItem">
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/claire-puckett-26044b27/">https://www.linkedin.com/in/claire-puckett-26044b27/</a> </p>
                </Grid>
               
            
        </Grid>
        </>
    )
}

export default Contact