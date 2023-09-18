import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'


export default function productCards(){

  return (
    <div className="card-container">
        <div className="mt-5 text-center">
        <Card>
        {/* <Card.Img variant="top" src="#" /> */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        </div>
    </div>

    
  );
}
