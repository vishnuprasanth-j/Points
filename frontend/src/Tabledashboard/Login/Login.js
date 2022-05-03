import LoginwitGoogle from './LoginwithGoogle';
import React from 'react';
import './Login.scss'

function LoginPage({Login}){
    
 
return <div className='loginpage'>
    <text>Login</text>
    <div className='loginDiv'>
    <span>GOOGLE:</span><LoginwitGoogle  Login={Login}/>
    </div>
   
</div>

}
export default LoginPage


