import React, { useState, useEffect } from 'react'

const baseURL = 'http://127.0.0.1:8000/api/expertise/'
function Expertises() {
    const [expertises, setexpertises] = useState([]);
    useEffect(() => {
        const fetchexpertises = async () => {
            let response = await fetch(baseURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setexpertises(data)
            }
        };

        fetchexpertises();
    }, []);

    if (!expertises) return null;
    return (
        <div class="service-list">
            <h4>Specializations</h4>
            <ul class="clearfix">
                {
                    expertises.map((expertise, index) => {
                        return (
                            <li key={index}>{expertise.title}</li>
                        )
                    }
                    )}
            </ul>
        </div>

    )
}

export default Expertises