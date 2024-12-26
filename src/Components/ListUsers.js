import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"
import Spinner from 'react-bootstrap/Spinner';
const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',rowGap :'20px',marginTop:"30px"}}>
            {
                loading ? <Spinner animation="border" variant="dark" /> : users.map((el,i,t)=> <CardUser el={el}/>)
            }
        </div>
    )
}

export default ListUsers