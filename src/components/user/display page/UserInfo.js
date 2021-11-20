import React from 'react'

const UserInfo = () => {
    return (
        <div className="display-page-component">
            <table class="ui celled table">
                <thead>
                        <th>Personal Information</th>
                        <th></th>
                    
                </thead>
                <tbody>
                    <tr>
                    <td data-label="Parameter">Employee ID: </td>
                    <td data-label="Value">19RMO2248</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Name: </td>
                    <td data-label="Value">Poojan Presi</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">DOB: </td>
                    <td data-label="Value">03/06/2001</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Gender: </td>
                    <td data-label="Value">Male</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Degree and Institution: </td>
                    <td data-label="Value">PHD Harvard University</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Position: </td>
                    <td data-label="Value">Associate Professor, Computer Science and Engineering</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Research Area: </td>
                    <td data-label="Value">Image Processing, Machine Learning, Deep Learning, Data Science</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Email ID: </td>
                    <td data-label="Value">poojanpresi@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInfo