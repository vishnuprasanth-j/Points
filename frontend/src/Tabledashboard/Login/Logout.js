import React from 'react';
import { useGoogleLogout } from 'react-google-login';
const  clientId="230390862629-h5k19flv81511vnrfgu0jabr1f6qeip7.apps.googleusercontent.com"

function LogoutHooks({setuser,Logout}) {
 // const history= useHistory()
  const onLogoutSuccess = (res) => {
    localStorage.clear();
    Logout()
    setuser(null);
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
   
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  });

  return (
   <text onClick={signOut}>Logout</text>
  );
}

export default LogoutHooks;