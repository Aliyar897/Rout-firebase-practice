import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.js'
// import { useNavigate } from 'react-router';
export default function Signup() {
 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass).then((res) =>{
          console.log('res', res);
          console.log('the user is', email)
          // navigator('/login')

        }).catch((err) => console.log('error', err))  
        
    }
  return (
    <div className='center container' style={{maxWidth:'500px'}}>
        <h3>Please Signup</h3>
        <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value) }  />
          <input type='password' placeholder='Password' onChange={(e) => setPass(e.target.value) }  />
        </div>
        <button typeof='submit ' className='btn blue'>Signup</button>
        </form>
      
    </div>
  )
}
