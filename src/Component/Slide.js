import { Container, Carousel} from "react-bootstrap"
import volunImage from "../assets/image/slides/volun.jpg"

const Slide = () => {
    return (
        <div>
            <Container className="align-items-baseline">
                <Carousel>
                <Carousel.Item>                
                <img className="d-block w-100" src={volunImage} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Join with Us!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                
                <img className="d-block w-100" src={volunImage} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Join with Us!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                
                <img className="d-block w-100" src={volunImage} alt="Thrid slide"/>
                    <Carousel.Caption>
                        <h3>Join with Us!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    )
}

export default Slide