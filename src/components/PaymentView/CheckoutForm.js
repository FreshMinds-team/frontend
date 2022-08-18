import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = ({ props }) => {
    let { authTokens, logoutUser, user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:8080/stripe/charge",
                    {
                        amount: parseInt(props.price)*100,
                        id: id,
                    }
                );
                if (response.data.success) {
                    bookAppointment()
                    navigate('/success', {
                        state: {
                            props:props
                        }
                    })
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        }
    };

    const bookAppointment = async (event) => {
        const appointmentData = {
            patient: user.user_id,
            description: props.description,
            appointment_time: props.time,
            appointment_date: props.date,
            price: props.price
        };
        let response = await fetch('http://127.0.0.1:8000/api/appointment/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(appointmentData)
        })

        if (response.status !== 200) {
            alert('Something went wrong!')
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <CardElement />
            </div>

            <div className="submit-section mt-4">
                <button type="submit" className="btn btn-primary submit-btn">Confirm and Pay</button>
            </div>
        </form>
    );
};