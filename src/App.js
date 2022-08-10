import { useEffect, useState } from "react";
import "./App.css";
import jwt_decoded from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarmain from "./Navbar";

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

      <div id="main" className="">
        {Object.keys(user).length !== 0 && (
          <>
            <Navbarmain
              hello={user.name}
              img={user.picture}
              out={(e) => handleSignOut(e)}
            />
         </>
        )}
      </div>
    </div>
  );
}


export default App;
