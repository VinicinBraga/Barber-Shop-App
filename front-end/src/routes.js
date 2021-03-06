import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header/index";
import SideBar from "./components/Sidebar";

import Agendamentos from "./pages/Agendamentos";
import Clientes from "./pages/Clientes";

const Routes = () => {
  return (
    <>
      <Header />
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Router>
            <SideBar />
            <Switch>
              <Route path="/" exact component={Agendamentos}></Route>
              <Route path="/clientes" exact component={Clientes}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};
export default Routes;
