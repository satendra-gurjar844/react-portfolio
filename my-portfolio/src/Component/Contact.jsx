import React, { useState, useEffect } from 'react'

const Contact = () => {

    const inititalValues = {name:"", email:"", phone:"", message:""}
    const [formValues, setFormValues] = useState(inititalValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value });
        //console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            //console.log(formValues);
            //alert('Thanks for showing intrest in my profile. I will return you soon!');
        }
    });

    const validate = (values) => {
        const error = {};
        const regex =     /^[^\s@]+@[^\s@]{2,}$/i;
        if(!values.name){
            error.name = "Name is required!";
        }

        if(!values.email){
            error.email = "Email is required!";
        }else if(!regex.test(values.email)){
            error.email = "Please Enter valid Email Address!";
        }

        if(!values.phone){
            error.phone = "Phone is required!";
        }

        if(!values.message){
            error.message = "Message is required!";
        }
        return error;
    }

  return (
    <>
    <section className="site-section" id="section-contact">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                    <h2>Get <strong>In Touch</strong></h2>
                </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0">
                <form className="site-form" onSubmit={handleSubmit}>
                    <h3 className="mb-5">Get In Touch</h3>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div style={{'color':'#44d744','fontSize':'22px','paddingBottom':'10px'}}>Thanks for showing intrest in my profile. I will get back to you soon!</div>
                    ) : (
                        <pre>{/*JSON.stringify(formValues, undefined, 2)*/}</pre>
                    )}
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name"
                            className="form-control px-3 py-4" 
                            placeholder="Enter Your Name"
                            onChange={handleChange}
                            value={formValues.name}
                        />
                        <span style={{color:"red"}}>{formErrors.name}</span>
                    </div>
                    
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="email"
                            className="form-control px-3 py-4" 
                            placeholder="Enter Your Email"
                            onChange={handleChange}
                            value={formValues.email}
                        />
                        <span style={{color:"red"}}>{formErrors.email}</span>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                            name="phone"
                            className="form-control px-3 py-4" 
                            placeholder="Enter Phone Number"
                            onChange={handleChange}
                            value={formValues.phone}
                        />
                        <span style={{color:"red"}}>{formErrors.phone}</span>
                    </div>
                    <div className="form-group mb-5">
                        <textarea 
                        name='message' 
                        className="form-control px-3 py-4" cols="30" rows="5" 
                        onChange={handleChange}
                        valu={formValues.message}
                        placeholder="Write a Message"></textarea>
                        <span style={{color:"red"}}>{formErrors.message}</span>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message"/>
                    </div>
                </form>
            </div>
            <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                    <li>
                        <span className="text-uppercase">Email</span>
                        satendragurjar844@gmail.com
                    </li>
                    <li>
                        <span className="text-uppercase">Phone</span>
                        +91-9873313136
                    </li>
                    <li>
                        <span className="text-uppercase">Fax</span>
                        +91-9873313136
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Contact