import { Form, Input, Button } from "antd-mobile";
import { useState, useContext } from "react";
import "./formLogin.css";
import { useNavigate } from "react-router-dom";
import userServices from "../../services/user.services";
import { UserContext } from "../../context/user.context";

const FormLogin = () => {
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(UserContext);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (value, type) => {
    setLoginForm({
      ...loginForm,
      [type]: value,
    });
  };

  const handleSubmit = async () => {
    const dataUser = {
      email: loginForm.email,
      password: loginForm.password,
    };
    const user = await userServices.loginUser(dataUser);
    storeToken(user.data.token);
    navigate("/portfolio");
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
            Log in
          </Button>
        }
      >
        <Form.Item name="email" label="Email">
          <Input
            value={loginForm.email}
            onChange={(value) => handleInputChange(value, "email")}
          />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input
            type="password"
            value={loginForm.password}
            onChange={(value) => handleInputChange(value, "password")}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLogin;
