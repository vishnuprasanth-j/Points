import { useGoogleLogin,GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import React from "react";
import dotenv from 'dotenv';
import{ReactComponent as Gone} from '../../assests/Glogo1.svg';

function LoginwitGoogle({Login}){
  dotenv.config()
   const  clientId="230390862629-h5k19flv81511vnrfgu0jabr1f6qeip7.apps.googleusercontent.com"
   const history= useHistory()

   
 const  onSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(res)
    try {
      //refreshTokenSetup(res);
      //Axios.post("http://localhost:8000/table/auth/login",result).then(re=>console.log(re)).catch(err=>console.error(err))
      Login()
      localStorage.setItem('user',JSON.stringify({result,token,isAuth:true}))
      history.push('/');
     
    } catch (error) {
      console.log(error);
    }
  };

  const  onFailure = () => alert('Google Sign In was unsuccessful. Try again later');
  //

//  const{signIn}= useGoogleLogin({

//  onSuccess,

//  onFailure,

//  clientId,

//  isSignedIn:true,

//  cookiePolicy:'single_host_origin'

//})
    return <>
         <GoogleLogin 
    clientId={clientId}
    render={renderProps => (
      <button onClick={renderProps.onClick} className="googleLOGIN"><Gone/>Signin</button>
    )}
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    accessType="offline"
    theme='dark'
   

  />
    </>
   

          
    }


    export default LoginwitGoogle;
