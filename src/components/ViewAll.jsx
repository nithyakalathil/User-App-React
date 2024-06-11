import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

const [data,changedata]=useState(

[
    
]

)

const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
        (response)=>{
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">District</th>
      <th scope="col">Place</th>
      <th scope="col">EmailId</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
   {data.map((value,index)=>{
    return  <tr>
    <th scope="row">{value.name}</th>
    <td>{value.dob}</td>
    <td>{value.blood}</td>
    <td>{value.mob}</td>
    <td>{value.addr}</td>
    <td>{value.pin}</td>
    <td>{value.dir}</td>
    <td>{value.pla}</td>
    <td>{value.email}</td>
    <td>{value.user}</td>
    <td>{value.pass}</td>
  </tr>
   })}
   
  </tbody>
</table>

        </div>
    </div>
</div>


    </div>
  )
}

export default ViewAll