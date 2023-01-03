import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'




const LoginModal = ({open, handleClose}) => {



    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loginRegister, setloginRegister] = useState(false)
    const navigate = useNavigate();
    const [emailErrorHandler, setemailErrorHandler] = useState(false);
    const [passwordErrorHandler, setpasswordErrorHandler] = useState(false);
    const [emailErrorHandlerMessage, setemailErrorHandlerMessage] = useState('');
    const [passwordErrorHandlerMessage, setpasswordErrorHandlerMessage] = useState('');

    const toggleLoginRegister =() => { 
      setemailErrorHandlerMessage('');
      setpasswordErrorHandlerMessage('');
      setemailErrorHandler(false);
      setpasswordErrorHandler(false);
      setloginRegister(!loginRegister)
    }

    const signIn = (e) => {
      e.preventDefault();
      console.log('signing in');
      console.log(email, password)
      auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
            
            handleClose()
            navigate('/dashboard')
          }).catch((e) => {
            if (e.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
              setemailErrorHandler(true)
              setemailErrorHandlerMessage('Please enter a valid email')
            } else if (e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
              setpasswordErrorHandler(true)
              setpasswordErrorHandlerMessage('Please enter a proper and valid password of more than 6 characters')
            } else if (e.message === 'Firebase: An internal AuthError has occurred. (auth/internal-error).') {
              setpasswordErrorHandler(true)
              setpasswordErrorHandlerMessage('Please enter a proper and valid password of more than 6 characters')
            } else if (e.message === 'Firebase: Error (auth/missing-email).') {
              setemailErrorHandler(true);
              setemailErrorHandlerMessage('Please enter a valid email');
            } else if (e.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
              setpasswordErrorHandler(true)
              setpasswordErrorHandlerMessage('Please enter a proper and valid password of more than 6 characters')
            } else{
              console.log(e,'eeeeee')
            }
          });


    }

    const signUp = (e) => {
      e.preventDefault();
      console.log(email, password)
      auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) => {
            console.log(auth);
            if (auth) {
              setloginRegister(false);
              }}).catch((e) => {
            if (e.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
              setemailErrorHandler(true)
              setemailErrorHandlerMessage('Please enter a valid email');
            } else if (e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
              setpasswordErrorHandler(true)
              setpasswordErrorHandlerMessage('Please enter a proper and valid password of more than 6 characters');
            } else if (e.message === 'Firebase: An internal AuthError has occurred. (auth/internal-error).') {
              setpasswordErrorHandler(true)
              setpasswordErrorHandlerMessage('Please enter a proper and valid password of more than 6 characters')
            } else if (e.message === 'Firebase: Error (auth/missing-email).') {
              setemailErrorHandler(true)
              setemailErrorHandlerMessage('Please enter a valid email')
            } else if (e.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
              setemailErrorHandler(true)
              setemailErrorHandlerMessage('The email address is already in use by another account.');
            }          
          });
    }

    
    


  return (
    <form>
    <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{color:'green', fontWeight:'550',textAlign:'center', fontSize:30}}>{loginRegister ? 'Register' : 'Login' }</DialogTitle>
        <DialogContent>
          <TextField    
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="standard"
            color='success'
            value={email}
            onChange={
              (e) => {
                setemail(e.target.value);
                setemailErrorHandlerMessage('');
                setemailErrorHandler(false);
                }          
              }
            error={emailErrorHandler}
            helperText={emailErrorHandler? emailErrorHandlerMessage : ''}
          />
          <TextField          
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            color='success'
            value={password}
            onChange={
              (e) => {
                setpassword(e.target.value);
                setpasswordErrorHandlerMessage('');
                setpasswordErrorHandler(false);           
                }
              }
            error={passwordErrorHandler}
            helperText={passwordErrorHandler? passwordErrorHandlerMessage : ''}
          />
        </DialogContent>
        <DialogActions>
          {
            loginRegister ? <Button  variant='contained' sx={{backgroundColor:'green', ':hover': {backgroundColor:'#1a202c'}}} fullWidth type='submit' onClick={signUp}>SignUp</Button>:<Button  variant='contained' color='secondary' fullWidth type='submit' onClick={signIn} sx={{backgroundColor:'green', ':hover': {backgroundColor:'#1a202c'}}} >Login</Button>
          }
            
        </DialogActions>
        <Typography variant='body2' mt={1} gutterBottom align='center'>
          {loginRegister ? 'Already have an account?' : "Don't have an account?"} <Button variant='text' sx={{color:'green' }}  size='small' onClick={toggleLoginRegister}>{loginRegister? 'Login' : "SignUp"}</Button>
          {/* Don't have an account?<Button variant='text' color='secondary' size='small'>"SignUp"</Button> */}
        </Typography>
        <Typography variant='body2' mt={1} gutterBottom align='center' sx={{color:"green"}} mb={4}>
          Developed by X2 Crop
        </Typography>
      </Dialog> 
      </form>
  )
}

export default LoginModal;