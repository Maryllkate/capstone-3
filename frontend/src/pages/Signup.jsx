import { useState } from 'react';
import { FloatingLabel, 
        Form, Button } from 'react-bootstrap';


function Signup() {

  return (
    <div className="signup-form">
      <div className="p-3 text-center">
        <div className="header-text mb-4">
          <h1>User Registration</h1>
        </div>

        <Form >
          <FloatingLabel
          controlId="formGroupFirstName"
          label="FirstName"
          className="mb-3"
          >
             <Form.Control type="text" placeholder="Enter Firstname" required />
          </FloatingLabel>

          <FloatingLabel
          controlId="formGroupMiddleName"
          label="MiddleName"
          className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Middlename" />
          </FloatingLabel>

          <FloatingLabel
            controlId="formGroupLastName"
            label="LastName"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter LastName" />
          </FloatingLabel>
        
        <FloatingLabel
        controlId="formGroupEmail"
        label="Email Address"
        className="mb-3"
        >
          <Form.Control type="email" placeholder="Enter email" />
        </FloatingLabel>

        <FloatingLabel
        controlId="formGroupPassword"
        label="Password"
        className="mb-3"
        >
          <Form.Control type="text" placeholder="Password" />
        </FloatingLabel>

        <FloatingLabel
        controlId="formGroupVerifyPassword"
        label="Enter Password for validation"
        className="mb-3"
        >
          <Form.Control type="text" placeholder="Password Validation" />
        </FloatingLabel>

        </Form>
        <Button className="btn btn-primary mt-5 w-20 mx-auto d-block">Submit</Button>
      </div>
      </div>
      
      )
  };

  

export default Signup;