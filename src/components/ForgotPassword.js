import React, { useState, useContext } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import UserContext from "../Context/UserContext";
import { Navigate, useNavigate } from 'react-router-dom';
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


function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const context = useContext(UserContext);
    const handleForgotPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then((res) => {
                console.log("Res is : " + res);
                toast("Link Successfully Sent", {
                    type: "success",
                    autoClose: 1000
                })
            })
            .catch((error) => {
                toast(error.message, {
                    type: "error",
                    autoClose: 1000
                })
            })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleForgotPassword();
        setEmail("");
    }

    // if (context.user === null) {
    //     return <Navigate to="/signin" />
    // }


    return (
        <Container className='text-center'>
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                    <Card>
                        <Form onSubmit={handleFormSubmit}>
                            <CardHeader className='text-danger'>Forgot Password</CardHeader>
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
                                            placeholder='Enter registered Email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' block color='danger'>
                                    Reset Password
                                </Button>
                                <a className='mt-2 text-success' onClick={() => navigate("/signin")}>Back to Login
                                </a>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPassword