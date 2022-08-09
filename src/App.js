import { useEffect, useState } from "react";
import "./App.css";
import jwt_decoded from "jwt-decode";
import Form from "./Form";

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID tokenn: " + response.credential);
    var userObject = jwt_decoded(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});

    document.getElementById("signInDiv").hidden = false;
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
      <h1 className="text-">SIGN UP / IN</h1>
        <div className="" id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <div>
          <img alt="" src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )}

      <Form />
    </div>
  );
}

export default App;
