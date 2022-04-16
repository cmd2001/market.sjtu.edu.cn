import React from 'react';
import { NavbarBrand, Navbar, Container } from 'reactstrap';

class Navbars extends React.Component {
  render() {
    return (
      <Navbar className="navbar-horizontal navbar-dark bg-default" expand="lg">
        <Container>
          <NavbarBrand href={process.env.PUBLIC_URL + '/manual'}>
            SJTU Market Raper !
          </NavbarBrand>
        </Container>
      </Navbar>
    );
  }
}

export default Navbars;
