import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPaintBrush } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import{ CgProfile } from 'react-icons/cg';
import {RiDashboardFill} from 'react-icons/ri'

function Navbarmain(props) {
  return (
    <Navbar className="bg-purple-600" expand="lg">
      <Container>
        <Navbar.Brand className="text-white text-l font-semibold flex flex-row tracking-wide">
          {" "}
          <FaPaintBrush size={30} color={"pink"} /> Painting
        </Navbar.Brand>
        <div className="">
          <Navbar.Toggle
            className="bg-white"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="grow-0" id="basic-navbar-nav">
            <Nav className="me-auto">
              <img
                src={props.img}
                alt="userimage"
                className="rounded-full w-10 h-10 content-center smalls:invisible"
              />
              <NavDropdown title={props.hello} id="basic-nav-dropdown">
                <p className="flex flex-row text-lg px-2 font-medium ">
                 <CgProfile size={25} /> Profile
                </p>
                <p className="flex flex-row text-lg px-2 font-medium ">
<RiDashboardFill size={25}/>                  DashBoard
                </p>
                <NavDropdown.Divider />
                <p
                  className="flex flex-row text-lg px-2 font-medium"
                  onClick={props.out}
                >
                  <ImExit size={25}/> Sign Out
                </p>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbarmain;
