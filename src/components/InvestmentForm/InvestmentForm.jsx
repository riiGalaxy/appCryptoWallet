import { Form, Input, Button, List, NumberKeyboard, Picker } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import investmentServices from "../../services/investment.services.js";

import "./investmentForm.css";

const basicColumns = [
  [
    { label: "Bitcoin", value: "Bitcoin" },
    { label: "Ethereum", value: "Ethereum" },
    { label: "Binance", value: "Binance" },
    { label: "Solana", value: "Solana" },
    { label: "Matic", value: "Matic" },
    { label: "Cake", value: "Cake" },
    { label: "Bake", value: "Bake" },
    { label: "VetChain", value: "VetChain" },
    { label: "Coti", value: "Coti" },
    { label: "HBar", value: "HBar" },
    { label: "VTHO", value: "VTHO" },
    { label: "Beam", value: "Beam" },
    { label: "GRT", value: "GRT" },
    { label: "ADA", value: "ADA" },
    { label: "FET", value: "FET" },
    { label: "FTM", value: "FTM" },
    { label: "UNI", value: "UNI" },
    { label: "XTZ", value: "XTZ" },
    { label: "IOTA", value: "IOTA" },
    { label: "Sushi", value: "Sushi" },
    { label: "Theta", value: "Theta" },
    { label: "SRM", value: "SRM" },
    { label: "Mana", value: "Mana" },
    { label: "Kava", value: "Kava" },
    { label: "Near", value: "Near" },
    { label: "Rune", value: "Rune" },
    { label: "Akro", value: "Akro" },
    { label: "Luna", value: "Luna" },
  ],
];

const InvestmentForm = () => {
  const navigate = useNavigate();
  //data
  const [coin, setCoin] = useState({
    name: "",
    isVisible: false,
  });
  //keyboardQuantity
  const [keyBoard, setKeyBoard] = useState({
    value: "",
    isVisible: false,
  });
  //keyboardPurchase
  const [keyBoardTwo, setKeyBoardTwo] = useState({
    value: "",
    isVisible: false,
  });

  // start change coin state
  const onCoinValueChange = (valueCoin) => {
    setCoin({ name: valueCoin[0], isVisible: coin.isVisible });
  };

  const onVisibleCoinChange = () => {
    setCoin((s) => ({ ...s, isVisible: !coin.isVisible }));
  };
  // end change coin state

  //start change quantity state
  const onVisibleChangeKeyboard = () => {
    setKeyBoard({ isVisible: !keyBoard.isVisible, value: keyBoard.value });
  };

  const onQuantityValueChange = (value) => {
    setKeyBoard({
      value: keyBoard.value.concat(value),
      isVisible: keyBoard.isVisible,
    });
  };

  const onQuantityValueDelete = () => {
    setKeyBoard({
      value: keyBoard.value.slice(0, -1),
      isVisible: keyBoard.isVisible,
    });
  };
  //end change quantity state

  //start change purchase state
  const onVisibleChangeKeyboard2 = () => {
    setKeyBoardTwo({
      isVisible: !keyBoardTwo.isVisible,
      value: keyBoardTwo.value,
    });
  };
  const onPurchaseValueChange = (value) => {
    setKeyBoardTwo({
      value: keyBoardTwo.value.concat(value),
      isVisible: keyBoardTwo.isVisible,
    });
  };

  const onPurchaseValueDelete = () => {
    setKeyBoardTwo({
      value: keyBoardTwo.value.slice(0, -1),
      isVisible: keyBoardTwo.isVisible,
    });
  };
  //end change purchase state

  const handleSubmit = async () => {
    const dataInvestment = {
      coin: coin.name,
      quantity: keyBoard.value,
      purchasePrice: keyBoardTwo.value,
    };
    await investmentServices.createNewInvestment(dataInvestment);
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
            Add investment
          </Button>
        }
      >
        <Form.Item name="coin">
          <Button
            onClick={onVisibleCoinChange}
            block
            border="none"
            className="botonOculto"
          >
            <Picker
              columns={basicColumns}
              visible={coin.isVisible}
              onClose={onVisibleCoinChange}
              value={coin.name}
              onConfirm={onCoinValueChange}
            />
            <Input placeholder="Coin name" value={coin.name} />
          </Button>
        </Form.Item>

        <List.Item onClick={onVisibleChangeKeyboard}>
          <Input
            placeholder="Quantity"
            value={keyBoard.value}
            name="quantity"
          />
        </List.Item>

        <List.Item onClick={onVisibleChangeKeyboard2}>
          <Input
            placeholder="Purchase price"
            value={keyBoardTwo.value}
            name="purchasePrice"
            readOnly
            arrow={false}
          />
        </List.Item>
      </Form>

      <NumberKeyboard
        visible={keyBoard.isVisible}
        onClose={onVisibleChangeKeyboard}
        onInput={onQuantityValueChange}
        onDelete={onQuantityValueDelete}
        customKey="."
        className="keyBoard"
      />

      <NumberKeyboard
        visible={keyBoardTwo.isVisible}
        onClose={onVisibleChangeKeyboard2}
        onInput={onPurchaseValueChange}
        onDelete={onPurchaseValueDelete}
        customKey="."
        className="keyBoard"
      />
    </>
  );
};

export default InvestmentForm;
