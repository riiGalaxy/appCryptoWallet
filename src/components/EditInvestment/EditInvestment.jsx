import { useState } from "react";
import { Form, Input, Button, Dialog } from "antd-mobile";
import { Link, useLocation, useNavigate } from "react-router-dom";
import investmentServices from "../../services/investment.services.js";
import "./editInvestment.css";

const EditInvestmentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [investment, changeInvestment] = useState({ ...location.state });
  const handleSubmit = async (values) => {
    const newInvestment = {
      ...values,
      id: investment.id,
      purchasePrice: Number(values.purchasePrice),
      quantity: Number(values.quantity),
    };
    await investmentServices.editInvestmentId(newInvestment);
    navigate("/portfolio");
  };

  return (
    <>
      <Form
        onFinish={handleSubmit}
        initialValues={{ ...investment }}
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            className="botonFormulario"
          >
            Edit Asset
          </Button>
        }
      >
        <Form.Item name="coin" label="Coin name">
          <Input disabled />
        </Form.Item>
        <Form.Item name="quantity" label="Quantity">
          <Input type="number" />
        </Form.Item>

        <Form.Item name="purchasePrice" label="Purchase price">
          <Input type="number" />
        </Form.Item>
      </Form>
    </>
  );
};

export default EditInvestmentForm;
