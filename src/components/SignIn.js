import React, { useContext, useState } from 'react';

import {
    Container,
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from "reactstrap";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from '../Context/UserContext';

function SignIn() {
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log(userCred);
                context.setUser({ email: userCred.user.email, uid: userCred.user.uid });
            })
            .catch((error) => {
                console.log(error);
                toast("Please Enter Correct Credentials", {
                    type: "error",
                    autoClose: 1000
                })
            })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignIn();
    }

    if (context.user?.email) {
        return <Navigate to="/" />
    }
    return (
        <Container className='text-center'>
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                    <Card>
                        <Form onSubmit={handleFormSubmit}>
                            <CardHeader className='text-success'>SignIn Here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for='email' sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Enter your Email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='password' sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Enter 
                                            your password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' block color='success'>
                                    Sign In
                                </Button>
                                <a className='text-right text-danger text-right mt-2' onClick={() => navigate("/forgotpassword")}>Forgot Password
                                </a>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn