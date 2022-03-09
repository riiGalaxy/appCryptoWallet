import { useEffect, useState, useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ResumeProfile from "../../components/ResumeProfile/ResumeProfile";
import ButtonLogOut from "../../components/LogOut/LogOutButton";

import investmentServices from "../../services/investment.services.js";
import { UserContext } from "../../context/user.context";

import "./profile.css";

export const Profile = () => {
  const [stats, changeStats] = useState();
  const { user } = useContext(UserContext);

  useEffect(async () => {
    const getInvestmentUser = await investmentServices.getListInvestment();

    changeStats(getInvestmentUser);
  }, []);

  return (
    <>
      {user && <ProfileDetails user={user} />}
      {stats && <ResumeProfile stats={stats} />}
      <ButtonLogOut />
    </>
  );
};
