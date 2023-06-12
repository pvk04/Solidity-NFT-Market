import Button from "react-bootstrap/Button";
import { contract } from "../../configs/connection";
import { AppContext } from "../../contexts/context";
import { useContext } from "react";

export default function Nft({
	id,
	idNft,
	owner,
	collectionId,
	price,
	onSale,
	isMy,
	isOwner,
}) {
	const [{ address }, dispatch] = useContext(AppContext);

	async function buyNft() {
		try {
			alert("Идет покупка НФТ...");
			await contract.methods
				.buyNft(id)
				.send({ from: address, gasLimit: "800000" })
				.then(() => {
					alert("НФТ успешно куплено");
				});
			dispatch({ type: "SET_ACTIVITY" });
		} catch (e) {
			console.log(e);
			alert("Ошибка");
		}
	}

	async function sellNft() {
		try {
			const newPrice = prompt(
				"Введите цену, за которую хотите продать НФТ:"
			);
			alert("Выставляем НФТ на продажу...");
			await contract.methods
				.sellNft(id, newPrice * 10 ** 6)
				.send({ from: address, gasLimit: "800000" })
				.then(() => {
					alert("НФТ выставлено на продажу");
				});
			dispatch({ type: "SET_ACTIVITY" });
		} catch (e) {
			console.log(e);
			alert("Ошибка");
		}
	}

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
			{collectionId != -1 && (
				<p>Принадлежит к коллекции №{collectionId}</p>
			)}
			<p>Владелец {owner}</p>
			{onSale && <p>Цена: {price / 10 ** 6} PROFI</p>}
			{isMy && !onSale && !isOwner && (
				<Button variant="secondary" onClick={sellNft}>
					Выставить на продажу
				</Button>
			)}
			{!isMy && onSale && (
				<Button variant="success" onClick={buyNft}>
					Купить
				</Button>
			)}
		</div>
	);
}
