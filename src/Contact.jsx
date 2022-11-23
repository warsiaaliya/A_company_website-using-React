import React from "react";
import { useState } from "react";

const Contact= () => {

    const [data, setData] = useState({
      fullname:'',
      phone:'',
      email:'',
      msg:'',
    })

    const inputEvent = (event) => {
      const {name,value} = event.target;

      setData((preVal) => {
        return{
          ...preVal,
          [name]:value,
        };
      });
    };
  
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and EMail is ${data.email},here is what I want 
        to say ${data.msg}`)
      };

        return(
        <>
           <div className='my-5'>
                <h1 className="text-center">Contact Us</h1>
           </div>
           <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="form-group mb-4">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name"/>
  </div>
                        <div class="form-group mb-4">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile Number"/>
  </div>
                        <div class="form-group mb-4">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
  </div>
  
  <div className="form-group mb-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
                        </form>
                    </div>
                </div>

           </div>
        </>
    )
}

export default Contact;