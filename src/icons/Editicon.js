import edit from './icons8-edit-64.png'
import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext";
import Popup from '../components/Popup';

export default function Editicon(props) {

    const context = useContext(noteContext);
    const { setVisibility, visible, setDisplaytoggle}  = context;
    const { e } = props;

    const hendleOnClick = () => {
      setDisplaytoggle("")
      getDataFromClick(e);
    } 
    const getDataFromClick = (n) => {
      // setNote(n);
      console.log(n);
    };
  return (
    <div className='icons '>
    <img className="" src={edit} alt='edit' ></img>
    {/* { (visible===true)?<Popup element={e}/>:''} */}
  </div>
  )
}
