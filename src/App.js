import logo from "./images/google-signin-button.png";
import "./App.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
