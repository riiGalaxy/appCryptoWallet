import React from "react";
import { Image } from "antd-mobile";
import { Grid } from "antd-mobile/es/components/grid/grid";

import "./profileDetails.css";

const imgAvatarUrl =
  "https://img2.freepng.es/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg";

const ProfileDetails = ({ user }) => {
  return (
    <div className="profileContainer">
      <Grid columns={2} gap={5} justify-content-center>
        <Grid.Item>
          <p>Hi!</p>
          <h3>{user.username}</h3>
          <h4>{user.email}</h4>
        </Grid.Item>
        <Grid.Item>
          <Image src={imgAvatarUrl} width={100} height={100} fit="fill" />
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default ProfileDetails;
