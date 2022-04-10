import React from 'react';
import "./login.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email=data.get('email');
    let password = data.get("password");
    let emailcheck =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(emailcheck.test(email) && passwordcheck.test(password)){
      localStorage.setItem("user",email);
      navigate("/home",{ replace: true })
      window.location.reload(false)
    }else{
      alert("invalid User Credentials.. please provide valid email address and valid password ")
    }
  
    
    // 
    // 
    // let pass=false;
    // let emai=false;
    // if(password.match(passwordcheck)){
    //   pass =true;
    // }else{
    //   alert("please enter a valid email address");
    // }
    // if(email.match(emailcheck)){
    //   email =true;
    // }else{
    //   alert("please enter a valid password")
    // }
    // if(pass == true && emai == true){
    //   localStorage.SetItem("user",email);
    // }else{
    //   alert("please login with correct credentials")
    // }

  };
  return (
    <div className="login_main">
        <p style={{fontSize:"27px", fontWeight:"bold"}}>LOG IN</p>
        <p style={{marginTop:"2%", marginBottom:"1%"}}>Enter Your credentials to login in to TV2Z</p>
        <Box component="form" onSubmit={handleSubmit}>
        <Box className="input_box" sx={{
         display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :not(style)': { m: 2 },
      }}>
          <TextField 
          variant="filled" 
           margin="normal"
           required
           id="email"
           label="Email Address"
           name="email"
           autoComplete="email"/>
            <TextField
            variant="filled" 
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
        </Box>
        <p><span style={{opacity:"0.8", fontSize:"13px"}}>Forgot password?</span> <span style={{fontWeight:"bolder",fontSize:"13px"}}> Click here!</span></p>
        <p style={{marginTop:"2%", marginBottom:"2%", fontSize:"13px"}}><span style={{opacity:"0.8"}}>By clicking on 'Log in' button, you are hereby agreeing to our</span> <span style={{fontWeight:"bolder"}}>Privacy Policy</span> <span style={{opacity:"0.8"}}>and</span> <span style={{fontWeight:"bolder"}}>Terms & Conditions</span> </p>
        <div className="btn">
        <button className="submit_btn" type="submit" style={{ height:"40px", width:"80px", borderRadius:"5px", fontSize:"15px"}}>LOG IN</button>
        </div>
        </Box>
        <p style={{marginTop:"1%"}}><span style={{opacity:"0.8"}}>Don't have an account?</span> <span style={{fontWeight:"bolder"}}>Sign up!</span></p>
    </div>
  )
}

export default Login