start geth --datadir ./ --networkid 15 --http --http.corsdomain "*" --http.api "net,eth,personal,miner,admin" --allow-insecure-unlock
start geth attach http://localhost:8545 