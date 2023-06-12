export default [
	{
		inputs: [
			{
				internalType: "bytes",
				name: "refCode",
				type: "bytes",
			},
		],
		name: "applyReferalCode",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "auctionId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "betPrice",
				type: "uint256",
			},
		],
		name: "bet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
		],
		name: "buyNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "collectionId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "startPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "maxPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "startTime",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "endTime",
				type: "uint256",
			},
		],
		name: "createAuction",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "mintCollection",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
		],
		name: "mintSingle",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				internalType: "string",
				name: "login",
				type: "string",
			},
		],
		name: "registration",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
		],
		name: "sellNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "sendNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "auctions",
		outputs: [
			{
				internalType: "uint256",
				name: "collectionId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "startPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "maxPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "startTime",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "endTime",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "status",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "collections",
		outputs: [
			{
				internalType: "bool",
				name: "isBuyed",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "onSale",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "auctionId",
				type: "uint256",
			},
		],
		name: "getAuction",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "collectionId",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startPrice",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "maxPrice",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256",
					},
					{
						components: [
							{
								internalType: "address",
								name: "owner",
								type: "address",
							},
							{
								internalType: "uint256",
								name: "price",
								type: "uint256",
							},
						],
						internalType: "struct Proffessional.Bet[]",
						name: "bets",
						type: "tuple[]",
					},
					{
						internalType: "bool",
						name: "status",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.Auction",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAuctions",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "collectionId",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startPrice",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "maxPrice",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256",
					},
					{
						components: [
							{
								internalType: "address",
								name: "owner",
								type: "address",
							},
							{
								internalType: "uint256",
								name: "price",
								type: "uint256",
							},
						],
						internalType: "struct Proffessional.Bet[]",
						name: "bets",
						type: "tuple[]",
					},
					{
						internalType: "bool",
						name: "status",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.Auction[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address",
			},
		],
		name: "getBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "collectionId",
				type: "uint256",
			},
		],
		name: "getCollection",
		outputs: [
			{
				components: [
					{
						internalType: "uint256[]",
						name: "nfts",
						type: "uint256[]",
					},
					{
						internalType: "bool",
						name: "isBuyed",
						type: "bool",
					},
					{
						internalType: "bool",
						name: "onSale",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.nftCollection",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getCollections",
		outputs: [
			{
				components: [
					{
						internalType: "uint256[]",
						name: "nfts",
						type: "uint256[]",
					},
					{
						internalType: "bool",
						name: "isBuyed",
						type: "bool",
					},
					{
						internalType: "bool",
						name: "onSale",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.nftCollection[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
		],
		name: "getNft",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "idNFT",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "int256",
						name: "collectionId",
						type: "int256",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "bool",
						name: "onSale",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.nft",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getNfts",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "idNFT",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "int256",
						name: "collectionId",
						type: "int256",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "bool",
						name: "onSale",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.nft[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address",
			},
		],
		name: "getUser",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "login",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "role",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "discount",
						type: "uint256",
					},
					{
						internalType: "bytes",
						name: "refCode",
						type: "bytes",
					},
					{
						internalType: "bool",
						name: "refCodeUsed",
						type: "bool",
					},
				],
				internalType: "struct Proffessional.User",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "NFT",
		outputs: [
			{
				internalType: "contract Nft",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "nfts",
		outputs: [
			{
				internalType: "uint256",
				name: "idNFT",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "int256",
				name: "collectionId",
				type: "int256",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "onSale",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TOKEN",
		outputs: [
			{
				internalType: "contract Token",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];
