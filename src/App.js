import { useEffect, useState } from "react";
import jwt_decoded from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarmain from "./Navbar";
import Draw from "./Draw";


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
      width: 900
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App max-w-full text-center">
      <div className="mt-60" id="form">
        <p className="text-white font-medium text-9xl">My Painter</p>
        <div className="karo pt-10" id="signInDiv"></div>
      </div>

      <div id="main" className="">
        {Object.keys(user).length !== 0 && (
          <>
            <Navbarmain
              hello={user.name}
              img={user.picture}
              out={(e) => handleSignOut(e)}
            />
            <p className="text-7xl text-center font-bold ">Welcome <span className="text-green-400"> {user.name} </span> !!</p>
            <p className="text-4xl text-center text-white font-medium ">You Can Draw your Drawing</p>
         <Draw />
         </>
        )}
      </div>
    </div>
  );
}


export default App;
