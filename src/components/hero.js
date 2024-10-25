import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


var heroData = [
    {
      id: 1,
      image: require('../Assets/images/house1.jpeg'),
      title: 'The perfect design for your trust',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../Assets/images/house2.jpeg'),
      title: 'Start Your Future Home Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../Assets/images/inter2.jpg'),
      title: 'Enjoy the Comfort',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ];


function Apphero() {
  return (
    <section id='home' className='hero-block'>
       <Carousel>
        {
            heroData.map(hero =>{
                return (
                    <Carousel.Item>
                        <Image src={hero.image}/>
                    <Carousel.Caption>
                      <h3>{hero.title}</h3>
                      <p>{hero.description}</p>
                      <a className='btn btn-primary' href={hero.link}>Learn More</a>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            })
        }
     
    </Carousel>

      
      
    </section>
  )
}

export default Apphero