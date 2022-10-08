import React from 'react'
import { Card, CardBody } from "reactstrap";
function UserCard({ user }) {
    return (
        <Card className='text-center m-3'>
            <img src={user.avatar_url}
                height="100"
                className="img-thumbnail rounded-circle" />
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.email}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-primary">Looking For a Job : {user.hireable ? "YES" : "NO"}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;