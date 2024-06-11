import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Login = () => {

const [data,changedata]=useState(
    {
        "user":"",
        "pass":"",
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readvalue=()=>{
    console.log(data)
}

  return (
    <div>

<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">User Name</label>
<input type="text" className="form-control" name="user" value={data.user} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">PassWord</label>
   <input type="password" name="pass" id="" className="form-control"  value={data.pass} onChange={inputHandler} />

    </div>
    <center>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readvalue}>Login</button>




    </div>
    

    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    
<Link class="link" to="/s">New Users CliCk here</Link>

</div>

    </center>

    
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Login