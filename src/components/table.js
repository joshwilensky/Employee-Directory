import React from "react";
import '../index.css'

function Table({ employees }) {
    return (
        <table>
            <thead>
                <tr>
                    <th><u>Profile Photo</u></th>
                    <th><u>Name</u></th>
                    <th><u>E-mail</u></th>
                    <th><u>D.O.B.</u></th>
                    <th><u>Location</u></th>
                </tr>
            </thead>
            <tbody>
                {/* goes through the employee database starting at index */}
                {employees.map((employee, i) => (
                    <tr key={i + "-employee"}>
                        <td>
                            <img src={employee.picture.large} alt={employee.name.first}></img>
                        </td>
                        <td>
                            {employee.name.first} {employee.name.last}
                        </td>
                        <td>{employee.email}</td>
                        <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
                        <td>
                            {employee.location.city}, {employee.location.state}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Table;