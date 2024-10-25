import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Appservice() {
    const servicesData = [
        {
          id: 1,
          icon: "fas fa-clone",
          title: "Architectural ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 2,
          icon: "fas fa-snowflake",
          title: "Creative Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 3,
          icon: "fas fa-plug",
          title: "Consultancy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 4,
          icon: "fas fa-desktop",
          title: "Customer Satisfaction",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 5,
          icon: "fas fa-trophy",
          title: "Timely Delivery",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 6,
          icon: "fas fa-life-ring",
          title: "Repair and maintanance",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
      ];

  return (
  <section id='service' className='services-block'>
         <Container fluid>
            <div className="title-holder">
                <h2>our services</h2>
                <div className="subtitle">what we do</div>
            </div>
      <Row>
        {
            servicesData.map(service => {
                return (
                    <Col sm={4} className='holder' key={service.id}>
                    <div className='icon'>
                        <i className={service.icon}></i>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    </Col>
                )
            })
        }
       
      </Row>
    </Container>
  </section>
  )
}

export default Appservice