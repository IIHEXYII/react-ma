import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
  import { Container } from 'react-bootstrap';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Anime from '../../pages/Anime';

const Layout = () => {
    return (
      <Router>
        <Navbar bg='light' variant='light' expand='lg'>
          <Navbar.Brand href='/'>OtakuList</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavLink to='/' exact className='nav-link'>
                Home
              </NavLink>
              <NavLink to='/about' className='nav-link'>
                About
              </NavLink>
              <NavLink to='/contact' className='nav-link'>
                Contact
              </NavLink>
              <NavLink to='/anime' className='nav-link'>
                Anime
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/Anime' component={Anime} />
        </Switch>  
        </Container>
      </Router>
    );
  };
export default Layout;