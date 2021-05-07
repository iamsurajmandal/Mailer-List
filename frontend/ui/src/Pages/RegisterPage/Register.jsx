import React,{useState} from 'react'
import { Card, FormControl, Button, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Styles from "./Register.module.scss"
import axios from 'axios';
function Register() {
    const [user, setUser] = useState('')
    const saveData = (event) => {
        event.preventDefault();
        console.log('e',user);
        let email = {
            user
        }
        console.log('url', process.env.APP_SERVER_URL,email)
        axios.post(`http://localhost:1800/send-mail`,email).then((response)=>{
            console.log('response', response)

        })
        .catch((error)=>{
            console.log('error', error)
        })
        setUser('');
    }
   function emailID(event)  {
        setUser(event.target.value)
    }
    return (
        <Card className={Styles.root}>
             <form onSubmit={saveData}>
                <FormControl  type="text"  required="true" color="secondary" size="medium" className={Styles.emailAdd}>
                    <InputLabel htmlFor="my-input" >Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text"  value={user} onChange={emailID}/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <Button type="submit" variant="contained" color="secondary" className={Styles.btnSubmit}>Register</Button>
            </form>
        </Card>
    )
}
export default Register