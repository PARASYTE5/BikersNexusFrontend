import React from 'react'
import { useEffect, useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://localhost:44384/api/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    return (
        <div>
            <table className='table-bordered container'>
        <tr className='p-5'>
            <th>ID</th>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
            <th>Password</th>z
            <th>Phone No</th>
            <th>Profile pic</th>
            <th>RegDate</th>
            <th>IsActive</th>
            <th>Bio</th>
            <th>Roles</th>
            <th>Address_Line1</th>
            <th>Address_Line2</th>
            <th>City</th>
            <th>State</th>
            <th>postal code</th>
            <th>Country</th>
            <th>Total Badges</th>

        </tr>
        {
            data.map((item) => {
                return(
                    <tr key={item.User_ID} className='p-5'>
                    <td>{item.User_ID}</td>
                    <td>{item.User_Name}</td>
                    <td>{item.User_FName}</td>
                    <td>{item.User_Email}</td>
                    <td>{item.User_Password}</td>
                    <td>{item.User_Phno}</td>
                    <td>{item.User_Pfp}</td>
                    <td>{item.User_RegDate}</td>
                    <td>{item.User_IsActive}</td>
                    <td>{item.User_Bio}</td>
                    <td>{item.Roles}</td>
                    <td>{item.Address_Line1}</td>
                    <td>{item.Address_Line2}</td>
                    <td>{item.City}</td>
                    <td>{item.State}</td>
                    <td>{item.Postal_Code}</td>
                    <td>{item.Country}</td>
                    <td>{item.Total_Badges}</td>
                    <td></td>
                    </tr>
                )
            })
        }
      </table>
        </div>
    )
}

export default Fetch