import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthProvider from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import ClickModel from "./pages/ClickModel";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Home} />
          <PrivateRoute exact path="/" component={ClickModel} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
