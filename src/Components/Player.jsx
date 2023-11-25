import { Card } from 'react-bootstrap';


const Player = (player) => {

  let {name,team,nationality,jerseyNumber, age, imageUrl} = player;

  return (
    <Card style={{ width: '18rem', margin: '5px',  }}>
      <Card.Img variant="top" src={imageUrl} alt="Card image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {name} plays for {team}   and is from {nationality}.
        His Jersey number is {jerseyNumber} and he is {age} years old.   </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default Player;