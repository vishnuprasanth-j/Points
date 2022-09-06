import React from "react";
import Axios from 'axios';
import {useParams} from 'react-router';
import './results.scss';
import MatchresultTable from './MatchresultTable'
import Carousel from 'react-elastic-carousel'

const Matchresults=({data,setdummy})=>{
     const{id}=useParams()
    const[state,setstate]=React.useState([])
    

  

     React.useEffect(()=>{
       
        console.log("opopop")
        Axios.get(`https://points44.herokuapp.com/table/results/get/${id}`).then(res=>{setstate(res.data)}).catch(err=>console.log(err))
        console.log(state)

         
    },[data])

 
    
 return <>
      {
      
            
          state.length==0?

              <h1 style={{fontWeight:'30px'}}>NO MATCHES ADDED YET</h1>
           
              :  
           
         
           
              <Carousel   itemsToShow={1}>
     { 
           state.map((t,index)=> 
          <MatchresultTable arr={t.arrofresults} idofMatch={t._id} setstate={setstate} match={index}  setdummy={setdummy}/>   )
    }
              </Carousel>



     
    
    }
    </>
}

export default Matchresults

