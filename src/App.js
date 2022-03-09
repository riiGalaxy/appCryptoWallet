import { HashRouter, Routes, Route } from "react-router-dom";
import { UserProviderWrapper } from "./context/user.context";
//pages
import { Home } from "./page/Home/Home";
import { Details } from "./page/Detail/Detail";
import { AddInvestment } from "./page/AddInvestment/AddInvestment";
import { Register } from "./page/register/Register";
import { Login } from "./page/login/Login";
import { Portfolio } from "./page/portfolio/Portfolio";
import { EditInvestment } from "./page/editInvestment/EditInvestment";
import { Profile } from "./page/profile/Profile";
import { News } from "./page/news/News";
//components
import Navigation from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";

import "./themes/base.css";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <UserProviderWrapper>
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/create" element={<AddInvestment />} />
            <Route path="/edit/:id" element={<EditInvestment />} />
          </Routes>
          <Navigation />
        </UserProviderWrapper>
      </HashRouter>
    </div>
  );
}

export default App;
