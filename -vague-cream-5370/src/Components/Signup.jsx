import React from "react";
import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import logincss from "../Singup/logincss.css";
import { Link, useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage";

function Signup() {
  const navigate = useNavigate();

  const alertLogin = () => {
    navigate("/")
    alert("WELCOME SHUBHAM VERMA..")
  }
   

  return (
    <div>
      <div
        className="contanierlogin"
        style={logincss}
        direction="column"
        pt="200px"
        border="1px"
      >
        <div id="applelogo">
          <img
            src="  https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png"
            alt="apple logo"
          />
        </div>
        <Box id="signtext">
          <h1>Sign in with your Apple ID</h1>
          <p>You will be signed in to Apple TV and Apple Music</p>
        </Box>
        <Box id="appleinput">
          <form id="loginform">
            {/* <input type="email" placeholder="Apple ID"  /> */}
            <input type="email" placeholder="Apple ID" id="loginput" />
            <button type="submit" id="loginsubmit"
            onClick={alertLogin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </button>
          </form>
        </Box>
      </div>

      <Box color="teal">
        <Text>
          <Link to="/SignupPage">Create New Apple ID</Link>
        </Text>
        <Text>Forget Apple ID or Password?</Text>
      </Box>
    </div>
  );
}
export default Signup;
