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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import UserContext from '../Context/UserContext';
function SignUp() {

    const context = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                context.setUser({ email: userCred.user.email, uid: userCred.user.uid });
            })
            .catch((error) => {
                toast(error.message, {
                    type: "error",
                    autoClose: 1000
                })
            })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
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
                            <CardHeader className='text-success'>SignUp Here</CardHeader>
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
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp