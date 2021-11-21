import React from 'react'

const LeaveApplyForm = () => {
    return (
        <div className="display-page-component">
            <table class="ui celled table">
                <tbody>
                    <tr>
                    <td><span>Remaining PL: </span></td>
                    <td> <span>Remaining CL: </span> </td>
                    <td> <span>Remaining SL: </span> </td>
                    <td><span>Remaining DL: </span></td>
                    </tr>
                </tbody>
            </table>
            <h2>Leave Application</h2>
            <hr/>
            <div>
                <form className="ui form">
                    <div class="field">
                        <label>Leave Type: </label>
                        <select name="Leave Type" multiple="" class="ui fluid dropdown">
                            <option disabled selected value=""></option>
                            <option value="CL">CL</option>
                            <option value="PL">PL</option>
                            <option value="SL">SL</option>
                            <option value="DL">DL</option>
                        </select>
                    </div>
                    
                    <div class="fields">
                        <div class="field">
                            <label>From: </label>
                            <input type="date"/>
                        </div>
                        <div class="field">
                            <label>To: </label>
                            <input type="date" placeholder="Middle Name"/>
                        </div>
                    </div>
                    <div class="field">
                        <label>Reason</label>
                        <textarea placeholder="Please mention your reason here"></textarea>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
                
            </div>
            
            <hr/>
        </div>
    )
}

export default LeaveApplyForm
