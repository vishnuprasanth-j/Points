import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import {useQuery} from 'react-query'
import Matchresults from './Mr';
import TableforPP from './tableinppage'
import SideNav from '../../components/SideNavbar';
import './points.scss';
import ShowTableonToggle from './Showtable.js'
import Hcpm from '../../components/headerCPM';


const Points=({props})=>{
  
  const[teamstate,setteamstate]=React.useState([])
  const[state,setstate]=React.useState({
    team:'',
    _id:"",
    finishes:Number
  })
 const[position,setposition]=React.useState(1)

 const[selectedteams,setselectedteams]=React.useState([])
 const[idstate,setidstate]=React.useState('')
 const[pparray,setpparray]=React.useState()
 const[organiser,setorganiser]=React.useState('')
 const[tourneyname,settourneyname]=React.useState('')
 const[steam,setsteam]=React.useState([])
 const {id}=useParams()
 const[res,setres]=React.useState()



 const[show,setshow]=React.useState()


 const[resarr,setresarr]=React.useState()

    const fetchData =async()=>{
        const {data}= await axios.get(`http://localhost:8000/table/${id}`);
        return {
          t:data.Teams,
          p:data.placepoints,
          organiser:data.organiser,
          tourneyname:data.tourneyname
        }
      }
     
    const {data, isLoading } = useQuery('Teams', fetchData , {
        refetchOnWindowFocus:"false"
    }) 
    
 
   React.useEffect(()=>{
      console.log("useeffect is called")

      if(data){
        setteamstate(data.t)
        setpparray(data.p)
        setorganiser(data.organiser)
        settourneyname(data.tourneyname)
      }
        
    
   },[data])
    

    if(isLoading){
      return <span>loading..</span>
    }

   const handleChange=async(e)=>{
       
        const{name,value}=e.target
        console.log(value)
         if(name==='team'){
          const res=await teamstate.find(i=>i.team==value)
          console.log(res)
          setidstate(res?._id)
         }
         setstate({...state,[name]:value})
        
   }

   const handleSubmit=()=>
  {
     axios.post(`http://localhost:8000/table/results/add/${id}`,selectedteams).then((res)=>{console.log("teamsaddedsuccessfulllyyyy");setres(res.data)}).catch(err=>console.log(err.data))
     setteamstate(prev=>[...prev,...steam])
     setsteam([])
     setselectedteams([])
     setposition(1)
   }
 
  const  handleAdd=(e)=> 
      { 
        e.preventDefault();
        if(state.team.length !=0){
          setselectedteams(prevstate=>[...prevstate,{...state,_id:idstate,position:pparray[position-1],total:parseInt(pparray[position-1])+parseInt(state.finishes),wccd: position==1?1:0,matchplayed:1}]);
        setsteam(prevstate=>[...prevstate,{_id:idstate,team:state.team}])
        setteamstate(teamstate=>teamstate.filter((i)=> i._id!==idstate))
        setstate({team:"",finishes:Number,_id:""})
        setposition(prevstate=>prevstate+1)
        }
       
       }
                  
  const handleUndo=(e)=>{
       if (selectedteams.length=="0"){
        alert("cant undo, you dumb ass")  
       }else{
        steam.pop()
        const popdata=selectedteams.pop()
        console.log(popdata)
        setteamstate(p=>[...p,{_id:popdata._id,team:popdata.team}])
        setposition(prevstate=>prevstate-1)
       }
        
           
  }

  

     return <div className="resultspage">
<Hcpm text={"Results"}/>  
<SideNav/>
<div className='rp-body'>
<div className='rp-body-header'>
<span>Organiser:-{organiser}</span>
<span>Tourneyname:-{tourneyname}</span>
</div>
<div className='rp-body-content'>
<TableforPP selectedteams={selectedteams} Organiser={organiser} Tourneyname={tourneyname}/>
   
   <button type="click"className='FnS'> <span className='front'>FINISH & SAVE</span></button>
<div className='dummy'>
   <h1 className='rp-content-text'>POSITION</h1>
   <h1 className='position'>#{position}</h1>
   
<div className="rpc-form">
  <label> TEAM<select  name="team" defaultValue={""} onChange={handleChange}  >
       <option value="" hidden>select  a team</option>
                   {   teamstate?
                    teamstate.map((e)=>{
                          return  <option key={e._id}>{e.team}</option>
                       }): null
                   }
        </select></label>
 <label >finish
 <input  name="finishes" id="finishes" value={state.finishes} onChange={handleChange}  type="number" min="0" max="96" ></input>
 </label>
 </div>  
 <div className='rpc-form-button'>
 <button className='ADD' onClick={handleAdd}>
         ADD
       </button>
       <button type="click"  className='UNDO' onClick={handleUndo}>UNDO</button>
       
       </div>
 </div>
 <div className='Mr-Container'>
 <h1  className="Mr-text">match list</h1>


 <Matchresults data={res} setshow={setshow}/>

 <ShowTableonToggle data={res} show={show}/>

 </div>
                  </div>
                  </div>
</div>


                
}

export default Points;


