import React, { useState, useEffect } from 'react'

const baseURL = 'https://subidshrestha.pythonanywhere.com/api/qualification/'
const Qualification = ({id}) => {
    const [qualifications, setQualifications] = useState([]);
    useEffect(() => {
        const fetchQualifications = async () => {
            let response = await fetch(baseURL+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setQualifications(data)
            }
        };

        fetchQualifications();
    }, []);

    if (!qualifications) return null;
    return (
        <div class="widget education-widget">
            <h4 class="widget-title">Education</h4>
            <div class="experience-box">
                <ul class="experience-list">
                    {
                        qualifications.map((qualification, index) => {
                            return (
                                <li key={index}>
                                    <div class="experience-user">
                                        <div class="before-circle"></div>
                                    </div>
                                    <div class="experience-content">
                                        <div class="timeline-content">
                                            <a class="name">{qualification.title}</a>
                                            <div>{qualification.institution}</div>
                                            <span class="time">{qualification.date}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        )}

                </ul>
            </div>
        </div>
    )
}

export default Qualification