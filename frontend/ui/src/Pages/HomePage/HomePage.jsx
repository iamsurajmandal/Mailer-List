import React from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import Styles from "./HomePage.module.scss"
function HomePage() {
    const history = useHistory();
    const goToPage=()=>{
       history.push('/register')
    }
    return (
        <div className={Styles.bodyHP}>
            <h1 className={Styles.h1Line}>Welcome To Mailer List Application</h1>
            <Button variant="contained" color="secondary" className={Styles.buttonPrimary} onClick={goToPage}>
                Register</Button>
        </div>
    )
}
export default HomePage