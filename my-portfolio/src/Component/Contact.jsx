import React, { useState, useEffect } from 'react'

const Contact = () => {

    const [inputValues, setInputValue] = useState({
        fname: "",
        email: "",
      });
    
      const [validation, setValidation] = useState({
        fname: "",
        email: "",
      });

    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
        let errors = validation;
    
        // Name validation
        if (!inputValues.fname.trim()) {
          errors.fname = "Name is required";
        } else {
          errors.fname = "";
        }
        
        // email validation
        const emailCond =
          "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!inputValues.email.trim()) {
          errors.email = "Email is required";
        } else if (!inputValues.email.match(emailCond)) {
          errors.email = "Please ingress a valid email address";
        } else {
          errors.email = "";
        }
    
        setValidation(errors);
      };

    useEffect(() => {
        checkValidation();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
                <form className="site-form contactform" name="contactform"
                id="registrationForm"
                action="/"
                method="POST"
                onSubmit={handleSubmit}>
                    <h3 className="mb-5">Get In Touch</h3>
                    <div className="form-group">
                        <input type="text" className="form-control px-3 py-4" 
                        name="fname"
                        id="fname"
                        onChange={(e) => handleChange(e)}
                        value={inputValues.name}
                        placeholder="Your Name"/>
                        {validation.name && <p>{validation.name}</p>}
                        {validation.name && console.log(validation)}
                    </div>
                    
                    <div className="form-group">
                        <input type="email" className="form-control px-3 py-4" 
                        name="email"
                        onChange={(e) => handleChange(e)}
                        value={inputValues.email}
                        placeholder="Your Email"/>
                        {validation.email && <p>{validation.email}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control px-3 py-4" placeholder="Your Phone"/>
                    </div>
                    <div className="form-group mb-5">
                        <textarea className="form-control px-3 py-4"cols="30" rows="5" placeholder="Write a Message"></textarea>
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