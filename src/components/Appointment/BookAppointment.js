import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="content">
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="schedule-cont">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='card'>
                                        <label>Date: </label><input type='date' className='form-control' />
                                    </div>
                                    <div className='card'>
                                        <label>Time: </label><input type='time' className='form-control' />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="submit-section proceed-btn text-right">
                        <Link to="/payment" state={{price : "$20"}} className="btn btn-primary submit-btn">Proceed to Pay</Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default BookAppointment