import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import {auth} from '../firebase'
export default function Login() {
    const navigator = useNavigate()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass).then((res) =>{
          console.log('res', res);
          navigator('/')

        }).catch((err) => console.log('error', err))  
        
    }
  return (
    <div className='center container' style={{maxWidth:'500px'}}>
        <h3>Please login</h3>
        <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value) }  />
          <input type='password' placeholder='Password' onChange={(e) => setPass(e.target.value) }  />
        </div>
        <button typeof='submit ' className='btn blue'>Login</button>
        </form>
      
    </div>
  )
}






