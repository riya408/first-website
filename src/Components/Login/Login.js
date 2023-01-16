import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const[name,setName]=useState('')
   const[password,setPassword] = useState('')
  

   const handleClick=()=>{
    localStorage.setItem('name',name)
    localStorage.setItem('password',password)
   }
  
  
  return (
    <>

      <section className="loginSection bg-primary">
        <div className="container h-100">
          <div className="row justify-content-center align-item-center h-100">
            <div className="col-6">
              <div className="loginBox bg-light p-4">
                <div className="loginProfile">
                  
                <img src="./profile.png" alt="" className="mw-100" />
                </div>
                <form action="/" className="loginform">
                <input type="text" className="form-control" placeholder="Username" onChange={(e)=>setName(e.target.value)} /> 
                <input type="Password" className="form-control mt-2" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <div className="mt-5">
                  
                  
                  
                <span className="">Don't have an account ?</span>
                <Link to='/Signup'>Register</Link>
                </div>
                </form>
                
                <div>
                <button className="btn btn-outline-primary px-4 rounded-pill mt-2 float-end" onClick={handleClick}>Login</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;