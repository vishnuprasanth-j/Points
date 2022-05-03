
import './App.scss'
import React from 'react';
import NavBar from './components/navBar';
import Homepage from './Tabledashboard/Homepage/homepage';
import {Route,Switch,Redirect} from 'react-router-dom';
import TeamsShow from './Tabledashboard/Addteampage/teams'
import Points from './Tabledashboard/Resultpage/Points'
import {QueryClient,QueryClientProvider} from 'react-query';
import MyComponent from './Tabledashboard/Overall/OverallStandings'
import ModalPage from './Tabledashboard/Tournamentlistpage/ModalPage';
import LoginPage from './Tabledashboard/Login/Login';



export default function App() {
  
  const[isAuthenticated,setisAuthenticated]=React.useState(JSON.parse(localStorage.getItem('user')))
   React.useEffect(()=>{const auth=JSON.parse(localStorage.getItem('user'))
   setisAuthenticated(auth?.isAuth)},[])
  const Login=()=>{
    return setisAuthenticated(true)
  }
  const Logout=()=>{
    localStorage.clear()
    return setisAuthenticated(false)
  }
   const client= new QueryClient()
 return <div className='App'>
 <QueryClientProvider client={client}>
 
 <NavBar  Logout={Logout} isAuthenticated={isAuthenticated}/>

<Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/login'><LoginPage Login={Login}/></Route>
    {isAuthenticated?

      <Route path='/modal' component={ModalPage}/>
   
    :
    <Redirect to="/login" />
  

    }
    

    <Route path='/:id/teams' component={TeamsShow}/>
    <Route path='/:id/points' component={Points}/>
    <Route path='/:id/overall' component={MyComponent}/>


</Switch>


</QueryClientProvider>
 </div> 
}







//React.useEffect(()=>{
//  const user= JSON.parse(localStorage.getItem('user'))
//  if(!user){
//    setisAuthenticated(false)
//  }
//  setisAuthenticated(true)
//   },[])