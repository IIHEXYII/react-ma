import Heading from '../components/layout/Heading';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <>
      <Heading title='Home' />
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/c6/b1/4b/c6b14b5e239c0e84e9ab74f913689279.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/70/64/G2A9y5.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp2746090.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Berserker Armor</h3>
      <p>This is a image of the  Berserker Armor while its active.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Row>
    <Col><Card /></Col>
    <Col><Card /></Col>
    <Col><Card /></Col>
  </Row>
    
    </>
  );
};

export default Home;