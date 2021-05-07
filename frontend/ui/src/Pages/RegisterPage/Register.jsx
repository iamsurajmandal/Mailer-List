import React,{useState} from 'react'
import { Card, FormControl, Button, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Styles from "./Register.module.scss"
function Register() {
    const [user, setUser] = useState('')
    const saveData = (event) => {
        event.preventDefault();
        console.log('e',user);
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