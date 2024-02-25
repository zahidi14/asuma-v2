import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Box, Button } from "@mui/material";
import "./login.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setErr] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const auth = getAuth();
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user.email });
        navigate("/");
        console.log(user.email);
      })
      .catch((error) => {
        setErr(true);
      });
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
      >
        <form onSubmit={handleLogin}>
          <Box className="logform">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              label="Email"
              type="email"
              className="input"
              value={email}
              fullWidth
            />
            <TextField
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              variant="filled"
              label="Password"
              type="password"
              className="input"
              fullWidth
            />
            <Button variant="outlined" type="submit" fullWidth>
              Login
            </Button>
            {error && <span>Error guys</span>}
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
