import React, { useState } from 'react'
import './Login.css'
import { Link , useHistory} from 'react-router-dom'
import { auth } from './firebase';





function Login() {
    const history = useHistory(); //or use the useNavigate function 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>
    {
        e.preventDefault();



        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //sccessfully created a new user
            console.log(auth)
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    
    <div className='Login'>
        <Link to = '/'>
        <img className='Login_logo' src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" alt="" />
        </Link>


        <div className='Login_container'> 
            <h1>Sign-In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value = {email} onChange ={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password"  value = {password} onChange ={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='Login_signInButton'>Sign In</button>
            </form>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button onClick={register} className='Login_registerButton'>Create your Amazon Account</button>

        </div>
    </div>
    
  )
}

export default Login