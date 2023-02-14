import React from "react";
import Courses from "../components/Courses";
import Faqs from "../components/Faqs";
import Programs from "../components/Programs";
import { Row, Col, Card } from "react-bootstrap";

import { TbBooksOff } from "react-icons/tb";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <Row className="home ml-3 d-flex justify-content-center align-items-center ">
      <Row className=" advantage bg-light mt-4 mb-5">
        <Col>
          {/* <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Col>
                <h3>THE OUR ADVANTAGE</h3>
                <h1>Impact</h1>
                <p>
                  Africa faces a huge digital skills gap that
                  <br /> dilutes economic opportunities and development caused
                  largely <br />
                  in part by lack of access and in-affordability. We offer free
                  and accessible tech education to bridge this gap.
                </p>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col>
                <h3>THE OUR ADVANTAGE</h3>
                <h1>Impact</h1>
                <p>
                  Africa faces a huge digital skills gap that
                  <br /> dilutes economic opportunities and development caused
                  largely <br />
                  in part by lack of access and in-affordability. We offer free
                  and accessible tech education to bridge this gap.
                </p>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col>
                <h3>THE OUR ADVANTAGE</h3>
                <h1>Impact</h1>
                <p>
                  Africa faces a huge digital skills gap that
                  <br /> dilutes economic opportunities and development caused
                  largely <br />
                  in part by lack of access and in-affordability. We offer free
                  and accessible tech education to bridge this gap.
                </p>
              </Col>
            </SwiperSlide>
          </Swiper> */}
          <h3> OUR ADVANTAGE</h3>
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
          <Row className="cards">
            <Col>
              <Card>
                <TbBooksOff
                  color="pink"
                  size={"1.2em"}
                  className="card-img-top  text-center"
                />

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
                <TbBooksOff
                  color="pink"
                  size={"1.2em"}
                  className="card-img-top text-center"
                />

                <Card.Body>
                  <Card.Title>Quality Education</Card.Title>
                  <Card.Text>
                    OUR is committed to World class education offered in the
                    comfort of your home
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <TbBooksOff
                  color="pink"
                  size={"1.2em"}
                  className="card-img-top text-center"
                />

                <Card.Body>
                  <Card.Title>Impact</Card.Title>
                  <Card.Text>
                    We create access to equal opportunity and
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

      <Faqs />
      {/* <Swiper/> */}
      <div
        style={{
          backgroundColor: "#1d212f",
          width: "80%",
          height: "300px",
          display: "flex",
          paddingBottom:"20px",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="ready mb-3 row  gap-2  rounded "
      >
        <Col className=" justify-content-center">
          <div className="col">
            <h1 className="text-white fw-semibold">Ready to get admitted?</h1>
            <p className="text-white">
              Develop your coding skills with ladyCoder
            </p>
          </div>
          <div className="d-flex gap-4">
            <button className="btn btn-info">Enroll</button>
            <button
              style={{ boder: "1px solid transparent" }}
              className="btn btn-transparent b-1"
            >
              Contact Us
            </button>
          </div>
        </Col>

        <Col>
          <img
            className="row fluid"
            
            src="https://o.remove.bg/downloads/06b2a8d9-d31e-49f1-ae4d-1d2abdc72c20/inspired-african-student-glasses-holding-white-laptop-carefree-black-male-freelancer-smiling_197531-20160-removebg-preview.png"
            alt=""
          />
        </Col>
      </div>
    </Row>
  );
};

export default Home;
