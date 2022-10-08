import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
function UserRepos({ repoUrl }) {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        const response = await Axios.get(repoUrl);
        setRepos(response.data);
    }
    useEffect(() => {
        fetchRepos();
    }, [repoUrl]);
    return (
        <ListGroup>
            {
                repos.map((repo) => {
                    return (
                        <ListGroupItem key={repo.id}>
                            <div className='text-primary'>
                                {repo.name}
                            </div>
                            <div className='text-primary'>
                                {repo.description}
                            </div>
                            <div className='text-primary'>
                                {repo.language}
                            </div>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    )
}

export default UserRepos;