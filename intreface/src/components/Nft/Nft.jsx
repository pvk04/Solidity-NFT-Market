export default function Nft({ id, idNft, owner, collectionId, price, onSale }) {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "5px",
        border: "1px black solid",
        borderRadius: "5px",
      }}
    >
      <p>Нфт №{idNft}</p>
      {collectionId != -1 && <p>Принадлежит к коллекции №{collectionId}</p>}
      <p>Владелец {owner}</p>
      {onSale && <p>Цена: {price / 10 ** 6} PROFI</p>}
    </div>
  );
}
