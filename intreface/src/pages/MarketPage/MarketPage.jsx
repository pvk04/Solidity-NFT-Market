import { Card } from "react-bootstrap";
import Assets from "../../components/Assets/Assets";

export default function MarketPage() {
  return (
    <Card.Body>
      <Assets isMy={false} height={1000} />
    </Card.Body>
  );
}
