import React from 'react';
import './previewtable.scss';


const TableforPP=({selectedteams,Tourneyname,Organiser})=>{

  
    return <>
     <table  className="previewtable">
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
    
{selectedteams?
  selectedteams.sort((a,b)=> a.total<b.total ? 1:-1).map((e,index)=>{return <>
  <tr key={e._id}>
  <th className="td" scope="row">{index+1}</th>
<th scope="col" className="td">{e.team}</th>
<th scope="col" className="td">{e.wccd}</th>
<th scope="col" className="td">{e.position}</th>
<th scope="col" className="td">{e.finishes}</th>
<th scope="col" className="td">{e.total}</th>
</tr>
</>

  }):null
}

    </tbody>
    </table>
    </>
}




export default TableforPP