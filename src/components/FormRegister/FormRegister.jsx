import { Form, Input, Button, Dialog, Checkbox } from "antd-mobile";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../../services/user.services";

import "./formRegister.css";

const FormRegister = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (value, type) => {
    setNewUser({
      ...newUser,
      [type]: value,
    });
  };

  const handleSubmit = async () => {
    const dataUser = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    };
    const user = await userServices.createNewUser(dataUser);
    navigate("/login");
  };

  return (
    <>
      <Form
        onFinish={handleSubmit}
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            className="botonFormulario"
          >
            Register
          </Button>
        }
      >
        <Form.Item name="username" label="Username">
          <Input
            value={newUser.username}
            onChange={(value) => handleInputChange(value, "username")}
          />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input
            value={newUser.email}
            onChange={(value) => handleInputChange(value, "email")}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          help="Minimum 8 characters password"
        >
          <Input
            type="password"
            value={newUser.password}
            onChange={(value) => handleInputChange(value, "password")}
          />
        </Form.Item>
      </Form>

      <Checkbox className="checkbox">
        I agree to the Terms and Conditions Policy
      </Checkbox>
    </>
  );
};

export default FormRegister;
