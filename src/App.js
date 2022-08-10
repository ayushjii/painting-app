import { useEffect, useState } from "react";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import jwt_decoded from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID tokenn: " + response.credential);
    var userObject = jwt_decoded(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("form").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("form").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "773145364557-ijjsgciulpa2sptsfvoc95s7vjl1qtu0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      type: "standard",
      theme: "filled_black",
      size: "large",
      text: "continue_with",
      shape: "pill",
      width: 300,
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div className="w-96 h-96 bg-white" id="form">
        <div id="signInDiv"></div>
      </div>

      <div id="main" className="" >
      {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <div>
          <img alt="" src={user.picture}></img>
          <h3>{user.name}</h3>
          <Navbarmain />
        </div>
      )}
      </div>
    </div>
  );
}

function Navbarmain() {
  return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}



export default App;
