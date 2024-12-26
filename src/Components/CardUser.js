import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardUser=({el})=>{
    return(
      <Link to={`/UserDescription/${el.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
          <Card.Text>
            {el.email}
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    )
}

export default CardUser