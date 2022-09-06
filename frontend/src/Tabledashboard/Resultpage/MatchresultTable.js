import React from 'react';
import Axios from 'axios';
import {useParams} from 'react-router';
import './MrTable.scss';

const MatchresultTable =({arr,idofMatch,setstate,match,show,setshow})=>{
  
    const {id}=useParams()

    const[isShow,setisShow]=React.useState(true)
    const[isLoading,setisLoading]=React.useState(false)
    const handleDelete=(e)=>{
        setisLoading(true)
            const idofthematch=e.target.id;
            Axios.delete(`https://points44.herokuapp.com/table/results/${id}/delete/${idofthematch}`).then(res=>{console.log(res.data);setstate(res.data)}).catch(err=>console.error(err))
            setshow()
        setisLoading(false)
        setisShow(true)
        }
   const handleview=(e)=>{
              setshow(e.target.id)
              setisShow(false)
  
   }
   const handlehide=()=>{
    setshow()
    setisShow(true)
   }
    return <>{isLoading?<h1>Loading..</h1>: <div className='card-res'>
    <h1 className='match'>{`MATCH-${match+1}`}</h1>
    <div className='cardbody'>
    { isShow?
        <button  id={idofMatch} onClick={handleview}>VIEW</button>:
        <button onClick={handlehide}>HIDE</button>
    }
   <button type="submit" onClick={handleDelete} id={idofMatch}>DELETE</button>
   </div>
   </div>

    }
</>
   
 
}


export default MatchresultTable

