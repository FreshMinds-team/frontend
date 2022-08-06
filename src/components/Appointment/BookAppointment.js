import React, { useState } from 'react'
import Calendar from 'react-calendar';

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
                        <a href="checkout.html" className="btn btn-primary submit-btn">Proceed to Pay</a>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default BookAppointment