import Heading from '../components/layout/Heading';
import ListGroup from 'react-bootstrap/ListGroup';

const Anime = () => {
  return (
    <>
      <Heading title='Anime' />
      <ListGroup>
  <ListGroup.Item>Hellsing Ultimate</ListGroup.Item>
  <ListGroup.Item>Death Note</ListGroup.Item>
  <ListGroup.Item>Nichijou</ListGroup.Item>
  <ListGroup.Item>Koe no Katachi</ListGroup.Item>
  <ListGroup.Item>Tonari no Totoro</ListGroup.Item>
  <ListGroup.Item>Shigatsu wa Kimi no Uso</ListGroup.Item>
  <ListGroup.Item>Akame ga Kill!</ListGroup.Item>
  <ListGroup.Item>Acchi Kocchi</ListGroup.Item>
  <ListGroup.Item>Steins;Gate</ListGroup.Item>
  <ListGroup.Item>Cowboy Bebop</ListGroup.Item>

</ListGroup>

    </>
    
  );
};

export default Anime;