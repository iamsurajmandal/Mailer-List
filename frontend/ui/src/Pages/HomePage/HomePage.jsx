import React from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import "../styles/HomePage.scss"
function HomePage() {
    const history = useHistory();
    const goToPage=()=>{
       history.push('/register')
    }
    return (
        <div className="body-color">
            <h1 className="h1-tag">Welcome To Mailer List Application</h1>
            <Button variant="contained" color="secondary" className="button-primary" onClick={goToPage}>
                Register</Button>
        </div>
    )
}
export default HomePage