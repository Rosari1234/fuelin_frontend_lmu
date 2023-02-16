import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouteName } from "../RouteName";
import HomePage from "./common/homepage";
import Auth from "./common/Auth";
import { MenuContext } from "./context/MenuContext";
import { Role } from "../models/Role";
import ContentLayout from "./common/ContentLayout";
import SidePane from "./common/SidePane";
import Content from "./common/Content";
import NavBarDashbord from "./common/NavBarDashbord";
import Dashboard from "./admin/Dashboard";
import CustomerAdminDashboard from "./customerAdmin/CustAdminDashboard";
import CustomerAdminSideMenu from "./customerAdmin/CustAdminSideBar";
import AllDeal from "./customerAdmin/AllDeal";
import Subscription from "./customerAdmin/Subscription";
import Signup from "./common/Signup";
import UserSideMenu from "./user/UserSideBar";
import BuyerInfromation from "./user/BuyerInformation";
import AdminSideMenu from "./admin/AdminSideBar";
import UserAllDeal from "./user/AllDeal";
import Login from "./common/login";
import VerifyRole from "./common/VerifyRole";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();
  return (
    <Router>
      <Switch>
        <Route path={RouteName.LOGIN}>
          <Login />
        </Route>
        <Route path={RouteName.SIGNUP}>
          <Signup />
        </Route>
        <Route path="/">
          {/* <Auth> */}
            <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
              <div className="bg-gray-100" style={{ display: "flex", flexDirection: "column", position: "absolute", width: "100%", height: "100%" }}>
                <Router>
                  <Switch>
                    <Route path="/super-admin">
                      {/* <VerifyRole allow={Role.SUPER_ADMIN}> */}
                        <SystemAdminDashbordRouter />
                      {/* </VerifyRole> */}
                    </Route>
                    <Route path="/customer-admin">
                      {/* <VerifyRole allow={Role.CUSTOMER_ADMIN}> */}
                        <CustomerAdminDashbordRouter />
                      {/* </VerifyRole> */}
                    </Route>
                    <Route path="/user">
                      {/* <VerifyRole allow={Role.USER}> */}
                        <UserDashbordRouter />
                      {/* </VerifyRole> */}
                    </Route>
                    <Route path="/" exact>
                      {/* <VerifyRole allow={Role.CUSTOMER_ADMIN}> */}
                        <CustomerAdminDashbordRouter />
                      {/* </VerifyRole> */}
                    </Route>
                  </Switch>
                </Router>
              </div>
            </MenuContext.Provider>
          {/* </Auth> */}
        </Route>
      </Switch>
    </Router>
  );
};

//  System Admin  Dashbord
const SystemAdminDashbordRouter: React.FC = () => {
  return (
    <ContentLayout>
      <NavBarDashbord />
      <Router>
        <SidePane>
          <AdminSideMenu />
        </SidePane>
        <Content>
          <Switch>
            <Route path={RouteName.ADMIN_DASHBOARD}>
              <Dashboard />
            </Route>
          </Switch>
        </Content>
      </Router>
    </ContentLayout>
  );
};

// Customer Admin  Dashbord
const CustomerAdminDashbordRouter: React.FC = () => {
  return (
    <ContentLayout>
      <NavBarDashbord />
      <Router>
        <SidePane>
          <CustomerAdminSideMenu />
        </SidePane>
        <Content>
          <Switch>
            <Route path={RouteName.CUSTOMER_ADMIN_DASHBOARD}>
              <CustomerAdminDashboard />
            </Route>
            <Route path={RouteName.CUSTOMER_ADMIN_ALL_DEALS}>
              <AllDeal />
            </Route>
            <Route path={RouteName.CUSTOMER_ADMIN_SUBSCRIPTION}>
              <Subscription />
            </Route>
          </Switch>
        </Content>
      </Router>
    </ContentLayout>
  );
};

// User Dashbord
const UserDashbordRouter: React.FC = () => {
  return (
    <ContentLayout>
      <NavBarDashbord />
      <Router>
        <SidePane>
          <UserSideMenu />
        </SidePane>
        <Content>
          <Switch>
            <Route path={RouteName.USER_ADMIN_DASHBOARD}>
              <BuyerInfromation />
            </Route>
            <Route path={RouteName.USER_ALL_DEALS}>
              <UserAllDeal />
            </Route>
          </Switch>
        </Content>
      </Router>
    </ContentLayout>
  );
};
export default App;
