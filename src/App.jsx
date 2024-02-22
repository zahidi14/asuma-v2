import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home, Login } from "./pages";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser, handleLogout } = useContext(AuthContext);
  // const currentUser = true;
  const ReqAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            index
            path="/*"
            element={
              <ReqAuth>
                <Home name={currentUser} logout={handleLogout} />
              </ReqAuth>
            }
          />
          {/* <Route path="/"></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
