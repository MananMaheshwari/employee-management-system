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
                    <td data-label="Parameter">Application Number: </td>
                    <td data-label="Value">19RMO2248</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Employee Name: </td>
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
                    <td data-label="Parameter">Native Language: </td>
                    <td data-label="Value">Gujrati</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Blood Group: </td>
                    <td data-label="Value">A+</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Physically Challenged: </td>
                    <td data-label="Value">No</td>
                    </tr>
                    <tr>
                    <td data-label="Parameter">Marital Status </td>
                    <td data-label="Value">Single</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInfo