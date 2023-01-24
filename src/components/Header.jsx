import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    
     <div style={{backgroundColor:'#1d212f',display:'flex',flexDirection:'column'}}className=''>
     <Navbar  expand="lg">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">PLP Academy</Nav.Link>
            <Nav.Link href="#pricing">Media</Nav.Link>
            <Nav.Link href="#pricing">Our Team</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Media</Nav.Link>
            <Nav.Link href="#pricing">Power Mentor</Nav.Link>
        </Nav>
     
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    <div className='d-flex pt-5 justify-content-center md:col-reverse'>
            <div>
                <img
                width="75%"
                height="83%"
                 src="https://powerlearnproject.org/static/media/land.320886a17f4416600cde.jpg" alt="" />
            </div>
            <div className=''>
                <h2 className='text-center text-white'>Learn Everyday & Discover a world of new <span style={{color:'blue'}}>Possibilities</span></h2>
                <p>Build skills with courses, certificates, and begin your new career from our world-class platform</p>
                <button className='btn btn-primary'>Apply Now</button>
            </div>

        </div>
    </div>

    </>
  );
}

export default Header;