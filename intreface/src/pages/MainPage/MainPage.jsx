import React from "react";
import Card from "react-bootstrap/Card";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import MarketPage from "../MarketPage/MarketPage";

export default function MainPage() {
  return (
    <Card style={{ display: "flex", width: "750px", margin: "auto" }}>
      <Card.Header>
        <NavBar />
      </Card.Header>
      <Card.Body>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
      </Card.Body>
    </Card>
  );
}
