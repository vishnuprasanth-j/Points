import React, { forwardRef } from 'react';
import FetchTable from './Tablepage2Fetch';
import './OverallTable.scss';



const OverallTable = forwardRef(({tabledata,organiser,tourneyname,theme},reff)=>(

<div className='table-container'  >
 <table className={`os-table ${theme}`} ref={reff}>
    <thead>
    <tr className='header-org'>
            <th scope="col" colSpan="7" className="th-header">
                          <div className="row"><div> 
                              <span className="tourney-name">{tourneyname}</span>
                                                      </div>
                                     <div>
                           <span className="organiser">{organiser}</span>
                               </div>
                          </div>
              </th>
    </tr>
    <tr>
    <th scope="col" colSpan="7" className="">Overall Standings</th>
    </tr>
    <tr className=""><th scope="col" className="">#</th>
    <th scope="col" className="">Teams</th>
    <th scope="col" className="">M</th>
    <th scope="col" className="">Place PTS</th>
    <th scope="col" className="">Finishes</th>
    <th scope="col" className="">Total</th>
    
    </tr>
    </thead>
    
    
    
    <tbody>
   
    {
      tabledata.sort((a,b)=> a.total<b.total ? 1:-1).map(({...restoftheprops},index)=>(
    <FetchTable  {...restoftheprops} index={index}/>
  )
  
  )
}
               
    </tbody>
    </table>
    </div>

    ))
    
export default OverallTable;

