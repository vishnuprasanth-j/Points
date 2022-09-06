import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import ShowTeams from './Show'
import SideNav from '../../components/SideNavbar';
import './teams.scss';
import { useQuery } from 'react-query';
import Hcpm from '../../components/headerCPM';

const  TeamsShow=()=>{
    
    const[Teamss,setTeamss]=useState({Teams:""})
    const [teamstate,setteamstate]=useState([])
    const[idoftheteams,setidoftheteams]=useState([])
    const[organiser,setorganiser]=React.useState('')
  const[tourneyname,settourneyname]=React.useState('')

    const getFunc=async()=>{
        const {data}= await axios.get(`https://points44.herokuapp.com/table/${id}`);
         return {
               organiser:data.organiser,
               tourneyname:data.tourneyname
             }
       }
    const{id}=useParams()
  
    const{data,isLoading}=useQuery('getoveralldata',getFunc, {
        refetchOnWindowFocus: false
      })
      React.useEffect(()=>{
          if(data){
            setorganiser(data.organiser)
            settourneyname(data.tourneyname)
          }
      
    },[data])
    const handleSubmit=(e)=>{
      if(Teamss['Teams'].length<1||Teamss['Teams'].length>20){
        console.log("sdbhyuf")
        alert("Team name can only contain 20 letters ")
      }
      else{
        e.preventDefault()
        axios.post(`https://points44.herokuapp.com/table/teams/add/${id}`,Teamss).then((res)=>(setidoftheteams(prevstate=>[...prevstate,res.data._id]),console.log("teamsaddedsuccessfulllyyyy"))).catch(err=>console.log(err.data))
        setTeamss({Teams:""}) 
}
      }
     
    const handleChange=(e)=>{
       
      const{value,name}=e.target
       setTeamss({...Teamss,[name]:value})
   
            }

       
     
return <div className="TeamsPage">
<Hcpm text={'Add Teams'}/>  
<SideNav/>
<div className='teampage'>
<div className='teampage-header'>
<span>Organiser:-{organiser}</span>
<span>Tourneyname:-{tourneyname}</span>
</div>

<div className='teampage-body'>
<div className="Teaminput">
<p className='input-header' >Enter the Team name</p> 
<input  type="text" name="Teams" value={Teamss.Teams} onChange={handleChange} className="team-input"></input> 
<button onClick={handleSubmit} className='team-button'>ENTER</button>
</div>
<ShowTeams  id={id}  idoftheteams={idoftheteams}  setidoftheteams={setidoftheteams} teamstate={teamstate}  setteamstate={setteamstate} />
</div>
</div>
</div>
}
export default TeamsShow;