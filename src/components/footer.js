import React from 'react'
import Container from 'react-bootstrap/Container';

function Appfooter() {
  return (
    <Container fluid>
        <div className="copyright">
            &copy;{new Date().getFullYear()}All Rights Reserved
        </div>
        <div className="socials">
            <ul>
                <li><a href="https://www.facebook.com"><i className='fab fa-facebook-f'></i></a></li>
                <li><a href="https://www.twitter.com"><i className='fab fa-twitter'></i></a></li>
                <li><a href="https://www.linkedin.com"><i className='fab fa-linkedin-in'></i></a></li>
            </ul>
        </div>
        <div className='designer'>
            <p>Design & Development: <span>
        <a href="https://stivechiazz-portfolio-pro-main.vercel.app/" target='_blank'>Stivechiazz</a>

                </span></p>
        </div>

    </Container>
  )
}

export default Appfooter