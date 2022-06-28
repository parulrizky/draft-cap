import { Card, Container, Row, Button } from "react-bootstrap"
import volunImage from "../assets/image/slides/volun.jpg"
import banjirImage from "../assets/image/slides/banjir.jpg"


const Tranding = () => {
    return  (
        <div>
        <Container >
            <h1 className="text-left p-4" id="trending">TRANDING</h1>
            <Row className="trend">
                <Card className="trendingbox" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={volunImage} className="gambarkotak" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <Card className="trendingbox" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={banjirImage} className="gambarkotak" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <Card className="trendingbox" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={banjirImage} className="gambarkotak" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <Card className="trendingbox" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={banjirImage} className="gambarkotak" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Row>
        </Container>

        
        </div>
    )
}


export default Tranding