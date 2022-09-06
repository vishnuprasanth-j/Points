import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import './Card.scss';

const Card=({iddata,arrofdata,setarrofdata,setid})=>{
  let tt=useHistory()
  //const[arrofdata,setarrofdata]=React.useState([])
 
  
  React.useEffect(()=>{
    (async function(){
     console.log("useeffect is called")
    
      try{
        const user= JSON.parse(localStorage.getItem('user'))
        const token =user.token
          const res=await axios.get(`https://points44.herokuapp.com/table/`, {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }});
          setarrofdata(res.data);
          console.log(arrofdata)
         
  }
      catch(e){console.log(e.data)}
    }())
  },[iddata])

  const Dropthetable=async(prop)=>{
    try{
    await axios.delete(`https://points44.herokuapp.com/table/${prop}`);
    setid(iddata.filter(e=>e!==prop))
    const index = iddata.map(function(item) {
    return item.Id
    }).indexOf(prop);
    console.log(index)
    await iddata.splice(index, 1);
    
    alert("deleted")
    }catch(error){console.log(error.data)

    }

  }
  const pushtoDashboard=(prop)=>{
       tt.push(`${prop}/teams`)
  }
 return <div className="Card">
  {
 
   arrofdata.map((e)=>
      <div className="Card-wrapper" > 
                <div className="Card-header" >

                {e.tourneyname}
                </div>
             
                <div className="Card-body">
                 <span><strong>Organiser:</strong> {e.organiser}</span>
                 
                 <span className="Date"><strong>createdat:</strong>{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(Date.parse(e.createdAt))
}</span>
                </div>


                <div className="Card-footer">

                <button onClick={()=>(pushtoDashboard(e._id))}>Edit</button>
                       <button onClick={()=>(Dropthetable(e._id))}>Drop</button>
                </div>
    </div>
   
  )
 }
 </div>

}

export default Card
