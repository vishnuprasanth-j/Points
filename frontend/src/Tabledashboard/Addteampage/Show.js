import React  from 'react';
import axios from 'axios'
import {ReactComponent as Can} from '../../assests/deleteicon.svg'
import './ShowTeams.scss'
const ShowTeams=({id,teamstate,setteamstate,idoftheteams,setidoftheteams})=>{
      const[isLoading,setisLoading]=React.useState(false)

    React.useEffect(()=>{(async function(){
        try{
            console.log(id)
            setisLoading(true)
            const res =await axios.get(`http://localhost:8000/table/${id}`);
            setteamstate(res.data.Teams)
            setisLoading(false)
            console.log(teamstate)
        }catch(err){
            console.log(`ShowJs`,err)
        } 
       
    }())},[idoftheteams]
    )
    const handleDelete=(e)=>{
        setisLoading(true)
        const idofteam=e.target.id
        console.log(e.target)
        console.log(idofteam)
        axios.delete(`http://localhost:8000/table/${id}/teams/delete/${idofteam}`).then((res)=>{setidoftheteams(prevstate=>[...prevstate,res.data._id])}).catch(err=>console.log(err))
        setisLoading(false)
    }

    return <div className="showteams">
    <h1 className="showteams-header">TEAMS LIST</h1>
    
    <div className='showteams-body'> { isLoading?<h1>Loading..</h1>
:      teamstate.map((e,index)=>{return <>
<label  htmlFor="teamname" >{index+1}.{e.team}
<button className='deleteicon' onClick={handleDelete} id={e._id} type="submit" ><Can/></button>
</label>
</>
})

    }
    </div> 
             
             
             </div> 

            
}


export default ShowTeams;
