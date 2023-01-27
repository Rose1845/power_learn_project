import Container from "react-bootstrap/Container";
import {Nav,Row,Col} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import tech from "../assets/tech.png";
function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1d212f",
          display: "flex",
          flexDirection: "column",
        }}
        className=""
      >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#/">
              <img
               
                src="https://powerlearnproject.org/static/media/logo.879e78bc92c159fe77f0.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-white fw-bold " href="#home">Home</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#features">Features</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#pricing">Pricing</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#features">PLP Academy</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#pricing">Media</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#pricing">Our Team</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#features">Contact</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#pricing">Media</Nav.Link>
                <Nav.Link className="text-white fw-bold " href="#pricing">Power Mentor</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="d-flex pt-5 justify-content-center align-items-center ">
          <Col className="d-flex mb-4  justify-content-center align-items-center">
            <img
              width="65%"
              height="69%"
              src={tech}
              // src="https://powerlearnproject.org/static/media/land.320886a17f4416600cde.jpg"
              alt=""
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center text-white fs-1 fw-bold">
              Learn Everyday & Discover a world of new{" "}
              <span style={{ color: "blue" }}>Possibilities</span>
            </h2>
            <p className="text-center text-white">
              Build skills with courses, certificates, and begin your new career
              from our world-class platform
            </p>
            <button
              style={{ backgroundColor: "gray" }}
              className="btn text-white"
            >
              Apply Now
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
