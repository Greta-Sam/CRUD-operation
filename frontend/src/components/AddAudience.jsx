import React, {useState} from "react"
import "../style/addaudience.css"
import axios from "axios"


const AddAudience = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


    const changeOnClick = e => {
        e.preventDefault()

        const audiences = {
            name,
            surname,
            email,
            phone
        };

        setName('')
        setSurname('')
        setEmail('')
        setPhone('')

        axios
        .post('http://localhost:8000/audiences/add', audiences)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="registration">
            <div className="registration-block">
                <h2 className="registration-block-title">Registration</h2>
                <form className="registration-form" onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="registration-form-name audience-information">
                        <label>First Name:</label>
                        <input 
                            required
                            type="text" 
                            onChange={e => setName(e.target.value)} 
                            value={name} 
                            placeholder="Name"/>
                    </div>
                    <div className="registration-form-surname audience-information">
                        <label>Last Name:</label>
                        <input 
                            required
                            type="text" 
                            onChange={e => setSurname(e.target.value)} 
                            value={surname} 
                            placeholder="Surname"/>
                    </div>
                    <div className="registration-form-email audience-information">
                        <label>E-mail:</label>
                        <input 
                            required
                            type="email" 
                            onChange={e => setEmail(e.target.value)} 
                            value={email} 
                            placeholder="E-mail"/>
                    </div>
                    <div className="registration-form-phone audience-information">
                        <label>Phone:</label>
                        <input 
                            required
                            type="phone" 
                            onChange={e => setPhone(e.target.value)} 
                            value={phone} 
                            placeholder="Phone"/>
                    </div>
                    <div className="registration-form-submit">
                        <p>{message}</p>
                        <button  type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddAudience
