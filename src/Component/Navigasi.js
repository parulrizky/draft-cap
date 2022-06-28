import { Navbar, Container, Nav } from "react-bootstrap" 

const Navigasi = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand id="/">DISMAN</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#trending">Berita</Nav.Link>
                <Nav.Link href="#volunteer">Relawan</Nav.Link>
                <Nav.Link href="#about">Tentang Kami</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigasi