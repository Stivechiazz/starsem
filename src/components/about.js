import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Image  from 'react-bootstrap/Image';
import mab from '../Assets/images/mabati.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Appabout() {
    const design = 90;
    const delivery = 100;
    const satisfaction = 100;

  return (
    <section id='about' className='about-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>ABOUT US</h2>
                <div className='subtitle'>get to know us</div>
            </div>
      <Row>
        <Col sm={6}>
        <Image src={mab}/>
        </Col>
        <Col sm={6}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus aperiam incidunt numquam voluptas neque voluptatum. Consequatur quasi
             assumenda quis veniam blanditiis quisquam sit officiis maiores similique sed laudantium distinctio dolor,
             repudiandae aperiam a delectus ipsum velit quibusdam perferendis quo aliquam!</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit accusantium, sit quos soluta beatae. 
                Voluptates vero dignissimos nihil laudantium.</p>
                <div className='progress-block'>
                    <h4>DESIGN</h4>
                <ProgressBar now={design} label={`${design}%`} />
                </div>
                <div className='progress-block'>
                    <h4>DELIVERY</h4>
                <ProgressBar now={delivery} label={`${delivery}%`} />
                </div>
                <div className='progress-block'>
                    <h4>CUSTOMER SATISFACTION</h4>
                <ProgressBar now={satisfaction} label={`${satisfaction}%`} />
                </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Appabout