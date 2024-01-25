import React, { useState } from 'react'
import { DateRangePicker } from 'rsuite';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import {useState}  from 'react';
import 'rsuite/dist/rsuite.min.css';
import "../App.css"
import { Link } from 'react-router-dom';
const SetDate = () => {
    const [date,setDate]=useState()
  return (
    <>
    <div className='dates'>
      <span><strong>Set Your Date Range Here</strong><Link to='/' className='close'><button type="button" class="btn btn-danger">close</button></Link></span>   
      <DateRangePicker className='date'/>
      
    </div>
   
    </>
  )
}

export default SetDate
