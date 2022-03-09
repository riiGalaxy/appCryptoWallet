import React from "react";
import { Image } from "antd-mobile";
import { Grid } from "antd-mobile/es/components/grid/grid";
import img from "../../static/png/jasnah.jpg";
import "./profileDetails.css";

const ProfileDetails = ({ user }) => {
  const imgAvatar = img;
  return (
    <div className="profileContainer">
      <Grid columns={2} gap={5} justify-content-center>
        <Grid.Item>
          <p>Hi!</p>
          <h3>{user.username}</h3>
          <h4>{user.email}</h4>
        </Grid.Item>
        <Grid.Item>
          <Image src={imgAvatar} width={100} height={100} fit="fill" />
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default ProfileDetails;
