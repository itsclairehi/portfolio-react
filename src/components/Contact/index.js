import React, {useState} from 'react';

function Contact(){
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
    console.log(formState);
    
  };

//initialize error message as empty string
const [errorMessage, setErrorMessage] = useState('');

function validateInput(e){
    //user input
    console.log(e.target.value);
    console.log(e.target.name);
    // setFormValues(...formValues, e.target.name: e.target.value)
  
    
    if(e.target.value==='') {
        e.target.placeholder="must provide value"
        setErrorMessage(`${e.target.name} is required.`)
        
    } else {
        setErrorMessage('')
    }
}


function formHandler(){

}

    return(
        <section className="content">
            <h1>Contact me</h1>
            <form id="contact-form content" onSubmit={formHandler} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" 
                    name="name" 
                    placeholder="name" id="name" 
                    onBlur={validateInput}
                    onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" 
                    name="email" 
                    placeholder="email" 
                    onBlur={validateInput} 
                    onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" 
                    rows="5" 
                    placeholder="message" 
                    onBlur={validateInput}
                    onChange={handleChange}  />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            </section>
    )
}

export default Contact