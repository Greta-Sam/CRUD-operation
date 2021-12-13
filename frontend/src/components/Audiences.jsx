import React, {useState, useEffect} from "react"
import axios from "axios"
import "../style/audiences.css"
import { Link } from "react-router-dom"


const Audiences = () => {

    const [audiences, setAudiences] = useState([])
  
    useEffect(() => {
        getData('http://localhost:8000/audiences')
    }, [])

    const getData = async (API) => {
        const response = await fetch(API);
        const data = await response.json();

        setAudiences(data)
    }
    
    const deleteAudience = id => {
      axios
      .delete(`http://localhost:8000/audiences/${id}`)
      .then(res => alert(res.data))
    }

    return (
        <div>
            <div className="container">
                <h1 className="container-title">Audience information</h1>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">FIRST NAME</div>
                        <div className="col col-2">LAST NAME</div>
                        <div className="col col-3">E-mail</div>
                        <div className="col col-4">Phone</div>
                        <div className="col col-5">UPDATE</div>
                        <div className="col col-6">DELETE</div>
                    </li>
                    {audiences.map((audience, key) => (
                        <li className="table-row" key={key}>
                            <div className="col col-1" >{audience.name}</div>
                            <div className="col col-2" >{audience.surname}</div>
                            <div className="col col-3" >{audience.email}</div>
                            <div className="col col-4" >{audience.phone}</div>
                            <div className="col col-5" ><Link to={`/update/${audience._id}`}>UPDATE</Link></div>
                            <div className="col col-6" ><button onClick={() => deleteAudience(audience._id)}>DELETE</button></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Audiences
