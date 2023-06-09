import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OwnerPanel from "../../components/OwnerPanel/OwnerPanel";
import { AppContext } from "../../contexts/context";
import { contract, web3 } from "../../configs/connection";
import Assets from "../../components/Assets/Assets";

export default function ProfilePage() {
  const [{ address, login, role, discount, refCodeUsed, activity }, dispatch] =
    useContext(AppContext);
  const [refValue, setRefVAlue] = useState("");
  const [myRef, setMyRef] = useState(`PROFI-${address.slice(2, 6)}2023`);
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function getUserInfo() {
      const userConnected = await contract.methods
        .getUser(address)
        .call({ from: address });
      dispatch({ type: "SET_LOGIN", payload: userConnected });

      const balanceConnected = await contract.methods
        .getBalance(address)
        .call({ from: address });
      setBalance(balanceConnected);
    }
    getUserInfo();
  }, [activity]);

  async function handleApplyRef() {
    try {
      const refCodePart1 = refValue.slice(0, 6);
      const refCodePart2 = refValue.slice(6, 10);
      const refCodePart3 = refValue.slice(10, 14);

      const resultCode =
        web3.utils.toHex(refCodePart1) +
        refCodePart2 +
        web3.utils.asciiToHex(refCodePart3).slice(2);

      await contract.methods
        .applyReferalCode(resultCode)
        .send({ from: address, gasLimit: "800000" });
      dispatch({ type: "SET_ACTIVITY" });
    } catch (e) {
      console.log(e);
      alert("Ошибка");
    }
  }

  async function handleCopy() {
    document.execCommand("copy", true, myRef);
    return await navigator.clipboard.writeText(myRef);
  }

  return (
    <>
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
        {role == 0
          ? "Не зарегистрирован"
          : role == 2
          ? "Владелец системы"
          : "Пользователь"}
      </Card.Text>
      <Card.Text>
        <strong>Баланс: </strong>
        {balance / 10 ** 6} PROFI
      </Card.Text>
      <Card.Text>
        <strong>Мой реферальный код: </strong>
        {myRef}
        <Button onClick={handleCopy}>копировать</Button>
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
      {role == 2 && <OwnerPanel />}
      <strong>Мои нфт</strong>
      <Assets isMy={true} height={300} />
    </>
  );
}
