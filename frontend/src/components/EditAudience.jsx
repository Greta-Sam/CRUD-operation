import React, {useState, useEffect} from "react"
import "../style/editaudience.css"
import axios from "axios"
import { useParams } from "react-router"


const EditAudience = () => {

    const {id} = useParams();

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const changeOnClick = (e) => {
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
        .put('http://localhost:8000/audiences/update/'+ id, audiences)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        getData('http://localhost:8000/audiences', id)
    }, [id])

    const getData = async(API, audienceId) => {
        const response = await fetch(`${API}/${audienceId}`);
        const data = await response.json();

        setName(data.name)
        setSurname(data.surname)
        setEmail(data.email)
        setPhone(data.phone)
    }

    return (
        <div className="update">
            <div className="update-block">
                <h2 className="update-block-title">Update registration</h2>
                <form className="update-form" onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="update-form-name audience-information">
                        <label>First Name:</label>
                        <input type="text" onChange={e => setName(e.target.value)} value={name} />
                    </div>
                    <div className="update-form-surname audience-information">
                        <label>Last Name:</label>
                        <input type="text" onChange={e => setSurname(e.target.value)} value={surname}/>
                    </div>
                    <div className="update-form-email audience-information">
                        <label>E-mail:</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="update-form-phone audience-information">
                        <label>Phone:</label>
                        <input type="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
                    </div>
                    <div className="update-form-submit">
                        <p>{message}</p>
                        <button  type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAudience