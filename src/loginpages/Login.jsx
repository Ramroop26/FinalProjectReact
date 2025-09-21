// src/components/AuthForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const navigate = useNavigate();
  const [regi, setRegi] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setRegi({ name: '', email: '', password: '', confirmpassword: '' }); // Clear form
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegi((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password check only for registration
    if (!isLogin && regi.password !== regi.confirmpassword) {
      toast.error("Passwords do not match.");
      
      return;
    }

    const payload = isLogin
      ? { email: regi.email, password: regi.password }
      : regi;

    const api = "http://localhost:3000/registration";

    try {
      const response = await axios.post(api, payload);
      console.log(response.data);

      if (isLogin) {
        
         localStorage.setItem('isLoggedIn', 'true');
        toast('Login successful!!!!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",transition: Bounce,
});

setTimeout(() => {
          navigate('/home'); // ✅ Redirect to home page
        }, 1000);
        // Optional: Redirect to dashboard or home
      } else {
        
            toast('Registration successful! Please login.!!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",transition: Bounce,
});
        setIsLogin(true); // Switch to login form
        setRegi({ name: '', email: '', password: '', confirmpassword: '' }); // Clear form
      }

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card style={{ width: '24rem' }}>
            <Card.Body>
              <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h3>
              <Form onSubmit={handleSubmit}>
                {!isLogin && (
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="name"
                      value={regi.name}
                      onChange={handleInput}
                      required
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={regi.email}
                    onChange={handleInput}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={regi.password}
                    onChange={handleInput}
                    required
                  />
                </Form.Group>

                {!isLogin && (
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="confirmpassword"
                      value={regi.confirmpassword}
                      onChange={handleInput}
                      required
                    />
                  </Form.Group>
                )}

                <Button variant="primary" type="submit" className="w-100">
                  {isLogin ? 'Login' : 'Register'}
                </Button>
              </Form>

              <div className="text-center mt-3">
                {isLogin ? (
                  <p>
                    Don't have an account?{' '}
                    <span
                      onClick={toggleForm}
                      style={{ color: 'blue', cursor: 'pointer' }}
                    >
                      Register
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <span
                      onClick={toggleForm}
                      style={{ color: 'blue', cursor: 'pointer' }}
                    >
                      Login
                    </span>
                  </p>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;
