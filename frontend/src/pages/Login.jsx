import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api', { email, password });

            if(response.status === 200) {
                window.location.href = '/login'
            } else {
                console.log("unable to access user")
            }
        } catch (error) {
            console.log("something went wrong in the server")
        }

    }

return (
    <div className="login-form">
        <div className="p-3 text-center">
            <div className="header-text">
                <h1>User Login</h1>
            </div>

            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="formGroupEmail"
                    label="Email Address"
                    className="mb-3 m-5"
                >
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </FloatingLabel>

                <FloatingLabel
                    controlId="formGroupPassword"
                    label="Password"
                    className="mb-3 m-5"
                >
                    <Form.Control 
                        type="text" 
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                </FloatingLabel>

                <Button className="btn btn-primary mt-5 w-20 mx-auto d-block" type="handleSubmit" onClick={handleSubmit}> 
                    Login  
                </Button>

            </Form>

                
            <div className="signup-section">
                <div className="mt-5">
                    <h3>Don't have an account yet? <br />
                        <Link to="/signup">
                            <Button className="btn btn-outline-primary mt-3 text-white">
                                Signup Here!
                            </Button>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    </div>

        )
};