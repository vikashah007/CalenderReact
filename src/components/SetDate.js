import React, { useState } from 'react'
import { DateRangePicker } from "react-date-range";
import { Button } from 'react-bootstrap';
import 'rsuite/dist/rsuite.min.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../App.css"
import { Link } from 'react-router-dom';
import { addDays } from 'date-fns';




const SetDate = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      console.log(state)
  return (
    <>
    <div className='dates'>
      <span><strong>Set Your Date Range Here</strong><Link to='/' className='close'><button type="button" class="btn btn-danger">close</button></Link></span>   
     
      <DateRangePicker
      onChange={item => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
     direction="horizontal"/>
    </div>
   
    </>
  )
}

export default SetDate
