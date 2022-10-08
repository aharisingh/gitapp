import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup
} from "reactstrap";
import UserCard from "./UserCard";
import UserRepos from "./UserRepos";
import UserContext from "../Context/UserContext";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
function Home() {
    const context = useContext(UserContext);

    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);

    const fetchDetails = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${query}`);
            setUser(response.data);
            console.log(response.data);
        }
        catch (error) {
            toast("User Not Found", {
                type: "error",
                autoClose: 1000
            })
        }
    }

    if (context.user?.email) {
        return (
            <Container fluid>
                <Row className=" mt-3">
                    <Col md="5">
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="Please provide the username"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Button
                                onClick={fetchDetails}
                                color="success" className="ml-1">
                                Fetch User
                            </Button>
                        </InputGroup>
                        {user ? <UserCard user={user} /> : null}
                    </Col>
                    <Col md="7">
                        {user ? <UserRepos repoUrl={user.repos_url} /> : null}
                    </Col>
                </Row>
            </Container>
        );
    }
    return (<Navigate to="/signup" />)
}

export default Home;