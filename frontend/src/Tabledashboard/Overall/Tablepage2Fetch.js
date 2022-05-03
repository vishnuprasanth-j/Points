import React from 'react';


const FetchTable=({team,matchplayed,position,finishes,index,total})=>{
 
 return <>
        <tr className="data-row"  >
<th className="td" scope="row">{index+1}</th>
<th scope="col" className="th" >{team}</th>
<th scope="col" className="th">{matchplayed}</th>
<th scope="col" className="th">{position}</th>
<th scope="col" className="th">{finishes}</th>
<th scope="col" className="th">{total}</th>

</tr>
   <tr className="data-row"  >
<th className="td" scope="row">{index+1}</th>
<th scope="col" className="th" >{team}</th>
<th scope="col" className="th">{matchplayed}</th>
<th scope="col" className="th">{position}</th>
<th scope="col" className="th">{finishes}</th>
<th scope="col" className="th">{total}</th>

</tr>
   <tr className="data-row"  >
<th className="td" scope="row">{index+1}</th>
<th scope="col" className="th" >{team}</th>
<th scope="col" className="th">{matchplayed}</th>
<th scope="col" className="th">{position}</th>
<th scope="col" className="th">{finishes}</th>
<th scope="col" className="th">{total}</th>

</tr>

   <tr className="data-row"  >
<th className="td" scope="row">{index+1}</th>
<th scope="col" className="th" >{team}</th>
<th scope="col" className="th">{matchplayed}</th>
<th scope="col" className="th">{position}</th>
<th scope="col" className="th">{finishes}</th>
<th scope="col" className="th">{total}</th>

</tr>

   <tr className="data-row"  >
<th className="td" scope="row">{index+1}</th>
<th scope="col" className="th" >{team}</th>
<th scope="col" className="th">{matchplayed}</th>
<th scope="col" className="th">{position}</th>
<th scope="col" className="th">{finishes}</th>
<th scope="col" className="th">{total}</th>

</tr>
       
        </>

        
  

   

}

export default FetchTable