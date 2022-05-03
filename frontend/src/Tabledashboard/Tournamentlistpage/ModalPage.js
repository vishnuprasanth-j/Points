import Hcpm from '../../components/headerCPM';
import  Modal  from '../../components/Modal'
import React from 'react'
import Card from '../../components/Card';
import {ReactComponent as Pluslogo} from '../../assests/Pluslogo1.svg';
import './ModalPage.scss';

const ModalPage=()=>{
    const[showModal,setshowModal]=React.useState(false)
  const[id,setid]=React.useState([]) 
  const[arrofdata,setarrofdata]=React.useState([])
  const handleClick=()=>{
     setshowModal(state=>!state)
  }
  
   return (
    <>
      <div className='modal-page'>
      <Hcpm text={"Tournament List"}/>
    {/*
      <hr  style={{
      color: ' #e1727d',
       backgroundColor: ' #e1727d',
      height: 10,
      borderColor : ' #e1727d'
     }}/> */
    } 
        
      
       <div className="Button-container">
       <button onClick={handleClick} className='Modal'><Pluslogo/><h3>Create a tournament</h3></button>
       </div>
       
       <Modal showModal={showModal}  setarrofdata={setarrofdata} setshowModal={setshowModal} setid={setid} />
        <Card  arrofdata={arrofdata} setarrofdata={setarrofdata} iddata={id} setid={setid}/>
       
      </div>
    </>
  );
   
}

export default ModalPage