import React from 'react'
import { useState,useRef} from 'react'
import axios from 'axios'
import './modal.scss'



 const Modal = ({ showModal, setshowModal,setid ,setarrofdata }) => {
  const modalRef = useRef();


  const closeModal = e => {
    if (modalRef.current === e.target) {
      setshowModal(false);
    }
  };

  const keyPress = React.useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setshowModal(false);
        console.log('I pressed');
      }
    },
    [setshowModal, showModal]
  );

  React.useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const [values, setvalues] = useState({
    organiser:'',
    tourneyname:'',
    KillPoints:'',
    //placepoints:{
    //1:'15',
    //2:'12',
    //3:'10',
    //4:'8',
  //
    //}
    placepoints:['15','12','10','8','6','4','2','1','1','1','1','1','1','0','0','0','0','0','0','0']
})

  
const {organiser,tourneyname,KillPoints,placepoints}=values


  //const handleChange=(e)=>{
  //  const {value,name}=e.target;
  // setvalues({
  //    ...values,placepoints:{
  //      ...placepoints,[name]:value
  //    },
  //     [name]:value
  //});
  //}

const handleChange=(e)=>{
  let {value,name}=e.target;
  console.log(name,value,values,placepoints)
 setvalues({
    ...values
        ,placepoints:[...placepoints],
     [name]:value
});
}
const arrhandleChange=(e)=>{
  let {value,name}=e.target;
  let arrnew=[...placepoints]
  arrnew[name]=value
  console.log(name,value,values,values.placepoints)
 setvalues({
    ...values
        ,placepoints:arrnew
});
}
const handleSubmit=async(event)=>{
  event.preventDefault();
  const user= JSON.parse(localStorage.getItem('user'))
  const token =user.token
  await axios.post("http://localhost:8000/table/add",values, {
    headers: {
      Authorization: 'Bearer ' + token //the token is a variable which holds the token
    }}).then(res=>setid(prevdata=>[...prevdata,res.data._id],setarrofdata(prevstate=>[...prevstate,res.data])),setshowModal(false)).catch(err=>console.log(err.data))

  setvalues({
    organiser:'',
    tourneyname:'',
    KillPoints:'',
    placepoints:['15','12','10','8']
  })

}
  return (
    <>
      {showModal ? (
        <div className="overlay" onClick={closeModal} ref={modalRef}>
            <div className="ModalWrapper" showModal={showModal}>

            <div className="Modalheader">
            CREATE TOURNAMENT
            </div>
            <div className="ModalContent"style={{
      maxHeight: 'calc(100vh - 210px)',
      overflowY: 'auto'
     }}>
             <form onSubmit={handleSubmit} className="Modal-form">
<label>Organiser:
<input type="text"  name="organiser" value={organiser} onChange={handleChange} required />
</label>
<label>Tourney name:
<input type="text"  name="tourneyname" value={tourneyname} onChange={handleChange} required/>
</label>
<label>FinishPoints:
 <input type="number"  name="KillPoints" value={KillPoints} onChange={handleChange} required  min='0' max='10'/>
 </label>


  <label htmlFor='pp'>PlacePoints</label>
  <table className="placepoints"><thead>
    <tr><th>position </th>
    <th>points
 </th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td><input id="pp" name={0}  value={placepoints[0]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>2</td> <td><input id="pp" name={1} value={placepoints[1]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>3</td><td><input id="pp" name={2}  value={placepoints[2]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>4</td> <td><input id="pp" name={3} value={placepoints[3]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>5</td><td><input id="pp" name={4}  value={placepoints[4]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>6</td> <td><input id="pp" name={5} value={placepoints[5]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>7</td><td><input id="pp" name={6}  value={placepoints[6]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>8</td> <td><input id="pp" name={7} value={placepoints[7]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>9</td><td><input id="pp" name={8}  value={placepoints[8]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>10</td> <td><input id="pp" name={9} value={placepoints[9]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>11</td><td><input id="pp" name={10}  value={placepoints[10]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>12</td> <td><input id="pp" name={11} value={placepoints[11]}  onChange={arrhandleChange} type="number" /></td></tr>
    <tr><td>13</td><td><input id="pp" name={12}  value={placepoints[12]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>14</td> <td><input id="pp" name={13} value={placepoints[13]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>15</td><td><input id="pp" name={14}  value={placepoints[14]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>16</td> <td><input id="pp" name={15} value={placepoints[15]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>17</td><td><input id="pp" name={16}  value={placepoints[16]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>18</td> <td><input id="pp" name={17} value={placepoints[17]}  onChange={arrhandleChange} type="number"/></td></tr>
    <tr><td>19</td><td><input id="pp" name={18}  value={placepoints[18]}  onChange={arrhandleChange} type="number" /></td></tr><tr>
    <td>20</td> <td><input id="pp" name={19} value={placepoints[19]}  onChange={arrhandleChange} type="number"/></td></tr>
    </tbody>
</table>
<button type="submit" className="submit-Button">SUBMIT</button> 
</form>

</div>
</div>

</div>):null}

</>
)
      }

export default Modal