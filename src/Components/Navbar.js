import React from "react";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl } from 'react-bootstrap';
import logo from './coding.png';
 
function Custombar(props) {
 return (
<div>
 <Navbar height="10px" fixed="top" bg="dark" variant="dark">
 
 <Navbar.Brand href="#"> 
 <img src={logo} style={{width:40, marginTop: -7, height:"40px"}} />
&nbsp;Engineering Platform</Navbar.Brand>
 <Nav className="mr-auto">
 </Nav>
 <Form inline>
 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
 <Button variant="outline-info">Search</Button>
 </Form>
 &nbsp;
 &nbsp;
 <Nav>

 <NavDropdown alignRight title="xxx" id="dropdown-menu-align-right" >
 <NavDropdown.Item href="#action/3.1"><i className="fa fa-user-circle fa-lg"></i>&nbsp;&nbsp;Profile</NavDropdown.Item>
 <NavDropdown.Item href="#action/3.2"><i className="fa fa-sign-out fa-lg"></i>&nbsp;&nbsp;Logout</NavDropdown.Item>
 </NavDropdown>
 </Nav>
 </Navbar>
 <br />
</div>
 )
}
 
export default Custombar