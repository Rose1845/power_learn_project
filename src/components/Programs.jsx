import React from "react";
import { Row, Col } from "react-bootstrap";
import pic from "../assets/pic.png";
import { TiTick } from "react-icons/ti";
const Programs = () => {
  return (
    <div>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <img
            width="500px"
            height="90%"
            src={pic}
            // src="https://powerlearnproject.org/static/media/student.ad9986a34c20839f9d03.jpg"
            alt="Image"
          />
        </Col>
        <Col>
          <h4>Our Program</h4>
          <h3>PLP Programs</h3>
          <small>
            Power Learn Project aims to empower African youth with skills, and
            certifications that allow you to navigate the job market with
            confidence.
          </small>
          <ul className="list-group">
            <li className='list-group-item"'>
              <span>
                <TiTick color="blue" />
              </span>
              Elementary training using free data access
            </li>
            <li>
              <span>
                <TiTick color="blue" />
              </span>
              16 weeks of Self-Paced Learning Management System
            </li>
            <li>
              <span>
                <TiTick color="blue" />
              </span>
              A variety of courses ranging from Programming to Blockchain
            </li>
            <li>
              <span>
                <TiTick color="blue" />
              </span>
              Hands on work experience with a proof of work module
            </li>
            <li>
              <span>
                <TiTick color="blue" />
              </span>
              Peer Based community for assesment evaluation and support
            </li>
          </ul>
          <button className="btn btn-info">Visit Programs</button>
        </Col>
      </Row>
    </div>
  );
};

export default Programs;
