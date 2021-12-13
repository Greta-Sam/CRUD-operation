import React from 'react'
import {useState} from "react";
import Axios from "axios";
import "../style/add.css"

const AddAudience = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);

    const addSpectator = () => {
        Axios.post('http://localhost:5000/spectator', {
          name: name,
          surname: surname,
          email: email,
          phone: phone,
        }).then(() => {
          console.log('succcess')
        })
      }

    return (
        <div className="performance-registracion">
            <div className="performance-registracion-block">
        <h2 className="performance-registracion-block-title">Registration</h2>
          <form className="performance-registracion-form">
            <div className="performance-registracion-form-name audience-information">
              <label>First Name:</label>
              <input type="text" onChange={(event) => {setName(event.target.value)}}/>
            </div>
            <div className="performance-registracion-form-surname audience-information">
              <label>Last Name:</label>
              <input type="text" onChange={(event) => {setSurname(event.target.value)}}/>
            </div>
            <div className="performance-registracion-form-email audience-information">
              <label>E-mail:</label>
              <input type="email" onChange={(event) => {setEmail(event.target.value)}}/>
            </div>
            <div className="performance-registracion-form-phone audience-information">
              <label>Phone:</label>
              <input type="phone" onChange={(event) => {setPhone(event.target.value)}}/>
            </div>
            <div className="performance-registracion-form-submit">
              <p></p>
              <button onClick={addSpectator}>Register</button>
            </div>
          </form>
        </div>
        </div>
    )
}

export default AddAudience
