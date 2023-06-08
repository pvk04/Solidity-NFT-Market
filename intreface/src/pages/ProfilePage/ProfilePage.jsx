import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../contexts/context";
import { contract, web3 } from "../../configs/connection";

export default function ProfilePage() {
  const [{ address, login, role, discount, refCodeUsed }, dispatch] =
    useContext(AppContext);
  const [refValue, setRefVAlue] = useState("");

  async function handleApplyRef() {
    const refCodePart1 = refValue.slice(0, 6);
    const refCodePart2 = refValue.slice(6, 10);
    const refCodePart3 = refValue.slice(10, 14);

    const resultCode =
      web3.utils.toHex(refCodePart1) +
      refCodePart2 +
      web3.utils.asciiToHex(refCodePart3).slice(2);

    // await contract.methods
    //   .applyReferalCode(resultCode)
    //   .send({ from: address, gasLimit: "800000" });
    // dispatch({ type: "SET_ACTIVITY" });
  }

  return (
    <Card style={{ display: "flex", width: "30%", margin: "auto" }}>
      <Card.Header>Профиль</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Адрес: </strong>
          {address}
        </Card.Text>
        <Card.Text>
          <strong>Логин: </strong>
          {login}
        </Card.Text>
        <Card.Text>
          <strong>Роль: </strong>
          {role}
        </Card.Text>
        <Card.Text>
          <strong>Мой реферальный код: </strong>
          {`PROFI-${address.slice(2, 6)}2023`}
        </Card.Text>
        <Card.Text>
          <strong>Скидка за рефералов: </strong>
          {discount}%
        </Card.Text>
        {refCodeUsed ? (
          <Card.Text style={{ color: "green" }}>
            Реферальный код использован
          </Card.Text>
        ) : (
          <InputGroup style={{ width: "50%" }}>
            <Form.Control
              placeholder="Введите реферальный код друга"
              value={refValue}
              onChange={(e) => {
                setRefVAlue(e.target.value);
              }}
            />
            <Button onClick={handleApplyRef}>Ввести</Button>
          </InputGroup>
        )}
      </Card.Body>
    </Card>
  );
}
