import React from 'react'
import { Navigate } from "react-router-dom";
function PageNotFound() {
    return (
        <div>
            <Navigate to="/signup" />
        </div>
    )
}

export default PageNotFound