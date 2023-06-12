import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/context";
import { contract, web3 } from "../../configs/connection";
import Nft from "../Nft/Nft";

export default function Assets({ isMy, isCollections, height }) {
	const [{ address, activity, role }, dispatch] = useContext(AppContext);
	const [rawData, setRawData] = useState();
	const [drawData, setDrawData] = useState();

	useEffect(() => {
		async function getData() {
			const data = await contract.methods.getNfts().call();
			setRawData(data);
			console.log(data);
			if (isMy) {
				const myNfts = data.filter((nft) => {
					if (nft.owner == web3.utils.toChecksumAddress(address)) {
						return nft;
					}
				});
				setDrawData(myNfts);
			} else {
				const otherNfts = data.filter((nft) => {
					if (
						nft.owner != web3.utils.toChecksumAddress(address) &&
						nft.onSale
					) {
						return nft;
					}
				});
				setDrawData(otherNfts);
			}
		}
		getData();
	}, [activity]);

	return (
		<div style={{ maxHeight: `${height}px`, overflowX: "auto" }}>
			{drawData?.map(
				({ idNFT, owner, collectionId, price, onSale }, id) => (
					<Nft
						key={idNFT}
						id={id}
						idNft={idNFT}
						owner={owner}
						collectionId={collectionId}
						price={price}
						onSale={onSale}
						isMy={isMy}
						isOwner={role == 2}
					/>
				)
			)}
		</div>
	);
}
