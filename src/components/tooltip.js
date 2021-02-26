import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState, useRef } from 'react';

function ShowEmail() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button className="email" ref={target} onClick={() => setShow(!show)}>
          Show Email
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              WeebOnline@Gmail.com
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
  
 export default ShowEmail;