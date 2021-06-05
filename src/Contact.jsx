import React, { useState } from 'react';

const Contact = () => {
    const [data,setData]=useState(
        {
            fullname:'',
            phone:'',
            email:'',
            message:''
        }
    );
    const InputEvent=(event)=>{
       const {name,value}=event.target;
       
       setData((prev)=>{
          return {
              ...prev,
              [name]:value,
          };
       });
    }
    const formSubmit=(e)=>{
         e.preventDefault();
         alert( `${data.fullname}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    type="email" class="form-control" id="exampleFormControlInput1" placeholder="fahad ameer" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    type="email" class="form-control" id="exampleFormControlInput1" placeholder="0092 300 1234567" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea

                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}

                                    class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Contact;