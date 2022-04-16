import React from 'react';
import {
  NavbarBrand,
  Navbar,
  Container,
  Col,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledCollapse,
  UncontrolledDropdown,
} from 'reactstrap';

class Navbars extends React.Component {
  render() {
    return (
      <Navbar className="navbar-horizontal navbar-dark bg-default" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            SJTU Market Raper !
          </NavbarBrand>
        </Container>
      </Navbar>
    );
  }
}

export default Navbars;
