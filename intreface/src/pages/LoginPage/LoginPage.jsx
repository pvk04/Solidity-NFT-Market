import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../contexts/context";
import { contract } from "../../configs/connection";

export default function LoginPage() {
  const [{ address }, dispatch] = useContext(AppContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const addressConnected = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    dispatch({ type: "SET_ADDRESS", payload: await addressConnected[0] });

    const userConnected = await contract.methods
      .getUser(addressConnected[0])
      .call({ from: addressConnected[0] });
    console.log(userConnected);
  }

  return (
    <Card style={{ display: "flex", width: "30%", margin: "auto" }}>
      <Card.Header>
        <Card.Text>Авторизация</Card.Text>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">Вход</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
