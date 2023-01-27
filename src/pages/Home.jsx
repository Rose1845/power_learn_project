import React from "react";
import Courses from "../components/Courses";
import Faqs from "../components/Faqs";
import Programs from "../components/Programs";
import { Row, Col, Card } from "react-bootstrap";
import { TbBooksOff } from "react-icons/tb";
const Home = () => {
  return (
    <Row className="ml-3 d-flex justify-content-center align-items-center ">
      <Row className=" bg-light mt-4 mb-5">
        <Col>
          <h3>THE PLP ADVANTAGE</h3>
          <h1>Impact</h1>
          <p>
            Africa faces a huge digital skills gap that
            <br /> dilutes economic opportunities and development caused largely{" "}
            <br />
            in part by lack of access and in-affordability. We offer free and
            accessible tech education to bridge this gap.
          </p>
        </Col>
        <Col>
          <Row>
            <Col>
              <Card>
                <TbBooksOff color="pink" size={"1.2em"} className="card-img-top text-center" />

                <Card.Body>
                  <Card.Title>Relevant SKills</Card.Title>
                  <Card.Text className="card-text">
                    Learn relevant skills that will give you the ability to
                    tackle the job market
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-2">
                <TbBooksOff color="pink" size={"1.2em"} className="card-img-top text-center" />

                <Card.Body>
                  <Card.Title>Quality Education</Card.Title>
                  <Card.Text>
                    PLP is committed to World class education offered in the
                    comfort of your home
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <TbBooksOff color="pink" size={"1.2em"} className="card-img-top text-center" />

                <Card.Body>
                  <Card.Title>Impact</Card.Title>
                  <Card.Text>
                    Power Learn Project creates access to equal opportunity and
                    empowerment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Programs />
      <Courses />
      {/* <Slider /> */}
      <Faqs />
      <div
        style={{
          backgroundColor: "#1d212f",
          width: "90%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mb-4 row  gap-4  rounded "
      >
        <Col className="col justify-content-center">
          <div className="col">
            <h1 className="text-white fw-semibold">Ready to get admitted?</h1>
            <p className="text-white">
              Develop your coding skills with ladyCoder
            </p>
          </div>
          <div className="d-flex gap-4">
            <button className="btn btn-info">Enroll</button>
            <button style={{boder:'1px solid transparent'}} className="btn btn-transparent b-1">Contact Us</button>
          </div>
        </Col>

        <Col>
          <img
            className="row"
            style={{ width: "500px", height: "250px" }}
            src="https://powerlearnproject.org/static/media/team.752a088ae2864df1d4bb.jpg"
            alt=""
          />
        </Col>
      </div>
    </Row>
  );
};

export default Home;
