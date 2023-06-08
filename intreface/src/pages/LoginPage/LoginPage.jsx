import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../contexts/context";
import { contract } from "../../configs/connection";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [{ address }, dispatch] = useContext(AppContext);

  useEffect(() => {
    async function getAddress() {
      const addressConnected = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch({ type: "SET_ADDRESS", payload: addressConnected[0] });
    }
    getAddress();
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(address);
    const userConnected = await contract.methods
      .getUser(address)
      .call({ from: address });

    console.log(userConnected);
    dispatch({ type: "SET_LOGIN", payload: userConnected });
    navigate("/");
  }

  return (
    <Card style={{ display: "flex", width: "30%", margin: "auto" }}>
      <Card.Header>
        <Card.Text>Авторизация</Card.Text>
      </Card.Header>
      <Card.Body>
        {address && <Card.Text>Адрес для входа: {address}</Card.Text>}
        <Form onSubmit={handleSubmit}>
          <Button type="submit">Вход</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
