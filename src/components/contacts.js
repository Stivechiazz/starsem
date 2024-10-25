import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import React from "react";

function Appcontact() {
  return (
    <section id="contact" className="contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>CONTACT US</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="enter your full name"
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="email"
                placeholder="enter your email address"
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="tel"
                placeholder="enter your telephone number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map" title="kikuyu-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d261105.08779165678!2d36.45939313650668!3d-1.2370645833785667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1727238657855!5m2!1sen!2ske"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-phone"></i>
              +254786985096
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              starsemcon254@gmail.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Kikuyu,Kenya
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Appcontact;
