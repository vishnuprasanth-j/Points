import Axios from 'axios';
import {useParams} from 'react-router';
import React from "react";
import './Matchtable.scss'


const ShowTableonToggle =({show,data})=>{
    const[state,setstate]=React.useState()
    const{id}=useParams()
   React.useEffect(()=>{
    console.log("opopop")
    Axios.get(`https://points44.herokuapp.com/table/results/get/${id}`).then(res=>{setstate(res.data)}).catch(err=>console.log(err))
    console.log('fnuhyzbf',state)

   },[show,data])
    

   const funvc =()=>{
       const e1= state.filter(i=>i._id==show)
      return e1[0].arrofresults
    
   }
return <div className='Match-table'>
{
    show?<>
    <table  className="stat-table">
    <thead>
      <tr className="labels"><th scope="col" className="th">#</th>
    <th scope="col" className="th">Team</th>
    <th scope="col" className="th">WCCD
    </th>
    <th scope="col" className="th">Place PTS</th>
    <th scope="col" className="th">Finish PTS</th>
    <th scope="col" className="th">Total</th>

    </tr>
    </thead>
    
    
    
    <tbody>
  
{state?
   funvc().sort((a,b)=> a.total<b.total ? 1:-1).map((e,index)=>{return <>
  <tr key={index}>
  <th className="td" scope="row">{index+1}</th>
<th scope="col" className="th">{e.team}</th>
<th scope="col" className="th">{e.wccd}</th>
<th scope="col" className="th">{e.position}</th>
<th scope="col" className="th">{e.finishes}</th>
<th scope="col" className="th">{e.total}</th>
</tr>
</>

  }):null
}

    </tbody>
    </table>

    </>:
    null
}
</div>
}

export default ShowTableonToggle;