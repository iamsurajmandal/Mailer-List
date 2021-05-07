import React from 'react'
import { Card , FormControl, Form, InputLabel, Input, FormHelperText} from '@material-ui/core';
import Styles from "./Register.module.scss"
function Register() {
    return (
        <Card className={Styles.root}>
         <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
      </Card>
    )
}
export default Register