import React from 'react'
import {auth} from '../firebase'
import {Link, useNavigate} from 'react-router-dom'
import { signOut } from 'firebase/auth';
export default function Navbar() {
  const navigator = useNavigate();
  const handleLogOut = (e) =>{
    e.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigator("/signup")
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <nav>
    <div className="nav-wrapper blue">
        <Link to="/" className="brand-logo left">Todo</Link>
        <ul id="nav-mobile" className="right">
            <li><Link to ='/login'>Login</Link></li>
            <li><Link to ='/signup'>signup</Link></li>
            <li>
                <button className='btn' onClick={handleLogOut}>logout</button>
            </li>
        </ul>
    </div>
  </nav>
  )
}
