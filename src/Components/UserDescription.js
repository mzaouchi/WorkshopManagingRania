import axios from "axios"
import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
const UserDescription=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=> setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div>
            {
                loading ?

                <div style={{display:'flex', justifyContent:'space-around', marginTop:'30px'}}>
                    <Spinner animation="border" variant="dark" />
                </div>

                :

                <div style={{display:'flex', justifyContent:'space-around', marginTop:'30px'}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                        <Card.Text>
                            {user.email}
                            <br/>
                            {user.address.street}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            }
        </div>
    )
}

export default UserDescription