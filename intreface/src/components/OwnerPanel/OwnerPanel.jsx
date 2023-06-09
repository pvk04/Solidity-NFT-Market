import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AppContext } from "../../contexts/context";
import { contract } from "../../configs/connection";

export default function OwnerPanel() {
  const [{ address }, dispatch] = useContext(AppContext);
  const [singlePrice, setSinglePrice] = useState("");
  const [collectionAmount, setCollectionAmount] = useState("");
  const [collectionId, setCollectionId] = useState(); // TODO
  const [startPrice, setStartPrice] = useState("");
  const [endPrice, setEndPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  async function handleCreateSingle() {
    try {
      await contract.methods
        .mintSingle(singlePrice * 10 ** 6)
        .send({ from: address });
      dispatch({ type: "SET_ACTIVITY" });
      console.log(singlePrice);
    } catch (e) {
      console.log("Ошибка создания одиночной нфт: " + e);
      alert("Ошибка");
    }
  }

  async function handleCreateCollection() {
    try {
      await contract.methods
        .mintCollection(collectionAmount)
        .send({ from: address });
      console.log(collectionAmount);
    } catch (e) {
      console.log("Ошибка коллекции нфт: " + e);
      alert("Ошибка");
    }
  }

  async function handleCreateAuction() {
    // TODO: add collection id
    try {
      await contract.methods
        .createAuction(collectionId, startPrice, endPrice, startDate, endDate)
        .send({ from: address });
      console.log({ startPrice, endPrice, startDate, endDate });
    } catch (e) {
      console.log(e);
      console.log("Ошибка создания аукциона на нфт: " + e);
    }
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <p>
        <strong>Панель владельца</strong>
      </p>
      <p>Создать нфт</p>
      <InputGroup className="mb-3">
        <FloatingLabel label="Цена нфт">
          <Form.Control
            placeholder="123"
            aria-label="Создать одиночную нфт"
            aria-describedby="basic-addon2"
            type="number"
            value={singlePrice}
            onChange={(e) => {
              setSinglePrice(e.target.value);
            }}
          />
        </FloatingLabel>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleCreateSingle}
        >
          Создать одиночную нфт
        </Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <FloatingLabel label="Количество нфт в коллекции">
          <Form.Control
            placeholder="123"
            aria-label="Создать коллекцию нфт"
            aria-describedby="basic-addon2"
            type="number"
            value={collectionAmount}
            onChange={(e) => {
              setCollectionAmount(e.target.value);
            }}
          />
        </FloatingLabel>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleCreateCollection}
        >
          Создать коллекцию нфт
        </Button>
      </InputGroup>
      <p>Создать аукцион</p>
      <Form>
        <FloatingLabel label="Начальная цена">
          <Form.Control
            placeholder="123"
            aria-label="Начальная цена"
            aria-describedby="basic-addon2"
            type="number"
            value={startPrice}
            onChange={(e) => {
              setStartPrice(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel label="Максимальная цена">
          <Form.Control
            placeholder="123"
            aria-label="Максимальная цена"
            aria-describedby="basic-addon2"
            type="number"
            value={endPrice}
            onChange={(e) => {
              setEndPrice(e.target.value);
            }}
          />
          <FloatingLabel label="Время начала аукциона">
            <Form.Control
              placeholder="123"
              aria-label="Время начала аукциона"
              aria-describedby="basic-addon2"
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Время конца аукциона">
            <Form.Control
              placeholder="123"
              aria-label="Время конца аукциона"
              aria-describedby="basic-addon2"
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </FloatingLabel>
        </FloatingLabel>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleCreateAuction}
        >
          Создать аукцион
        </Button>
      </Form>
    </div>
  );
}
