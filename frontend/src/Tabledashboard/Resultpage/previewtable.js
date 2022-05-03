import React from 'react'


const Preview=({t,k,index})=>{
    console.log(t,k,'pre')
    return <> 
    <th className="td" scope="row">{index+1}</th>
<th scope="col" className="th" >{t.map()}</th>
<th scope="col" className="th">{k}</th>
<th scope="col" className="th">{1}</th>
<th scope="col" className="th">{2}</th>
<th scope="col" className="th">{4}</th>
      </>
}

export default Preview