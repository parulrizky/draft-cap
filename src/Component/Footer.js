import { Card, Container, Row, Col, Image } from "react-bootstrap"

const SuperHero = () => {
    return  (
        <div>
        <Container>
            <h1 className="text-white text-center p-4" id="about">SUPERHERO</h1>
            <Row>
            {/*<Col md={3} className="movieWrapper">
                <Card className=" movieImage">
                    <Image src={captImage} alt="Multiverse of Madness" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Captain America</Card.Title>
                        <Card.Text className="text-left">
                        This is a wider card.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>*/}
            </Row>
        </Container>
        </div>
    )
}


export default SuperHero