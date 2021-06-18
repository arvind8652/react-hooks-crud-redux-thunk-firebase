import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="dark">
      <Container>
        <NavbarBrand style={{ color: "white" }}>CRUD OPERATION</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Heading;
