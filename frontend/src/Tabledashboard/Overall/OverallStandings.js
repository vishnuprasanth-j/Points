import { exportComponentAsJPEG} from 'react-component-export-image';
import React, { useRef } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import SideNav from '../../components/SideNavbar'
import './Overall.scss';
import OverallTable from './OverallTable';
import Hcpm from '../../components/headerCPM';



const MyComponent = () => {
  const componentRef = useRef();
  const [theme,settheme]=React.useState("theme1");
  const{id}=useParams()
  const[getdata,setgetdata]=React.useState([])
  const[organiser,setorganiser]=React.useState('')
  const[tourneyname,settourneyname]=React.useState('')
  const getFunc=async()=>{
   const {data}= await axios.get(`https://points44.herokuapp.com/table/${id}`);
   return   {
          matches:data.Match,
          organiser:data.organiser,
          tourneyname:data.tourneyname
        }
       
  }


React.useEffect(() => {

    getFunc().then(data=>{
    data.matches.map(t=>{
        return setgetdata(prevdata=>[...prevdata,...t.arrofresults])  
     });
     setorganiser(data.organiser);
     settourneyname(data.tourneyname);
    }
    
      )
    
        
    
     return () => {
      setgetdata([])
  
    
  }
}, [])


const handlechange=(e)=>{
  settheme(e.target.value)
  
}
const Mutateddata=()=>{

 
  const result = Object.values(getdata.reduce((r, o) => (r[o._id]
    ? (  r[o._id].finishes = parseInt(o.finishes)+parseInt(r[o._id].finishes),r[o._id].wccd += o.wccd,r[o._id].position += o.position,r[o._id].total += o.total,r[o._id].matchplayed += o.matchplayed)
    : (r[o._id] = {...o}),r), {}));
  return result
}
  return (<div className='os-page'>
<Hcpm text={"OVERALL STANDINGS"}/>
  <SideNav/>
    
    <div className='os-page-body'>
   <div className='os-tools'>
   <label>Select a theme <select onChange={handlechange}>
          <option>theme1</option>
          <option>theme2</option>
     </select></label>       
     <button onClick={() => exportComponentAsJPEG(componentRef)}>
       DOWNLOAD
      </button>
   </div>

   <div className='table-bk'>
     <OverallTable ref={componentRef}  tabledata={Mutateddata()} organiser={organiser} tourneyname={tourneyname} theme={theme}/>
</div>



   
</div>

    </div>
  

  

 
   
  );
};

export default MyComponent;


