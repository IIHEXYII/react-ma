import Heading from '../components/layout/Heading';
import InputGroup from 'react-bootstrap/inputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ShowEmail from '../components/tooltip';
const Contact = () => {
  return (
    <>
      <Heading title='Contact' />
        <div class="contact-container">

        <ShowEmail></ShowEmail>
 
          
  <InputGroup className="mb-4">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Example@Gmail.com"
      aria-label="Email"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Write a message:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  <Button className="submitBtn" as="input" type="submit" value="Submit" />{' '}
</div>
    </>
  );
};

export default Contact;