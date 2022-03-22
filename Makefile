build:
	docker-compose up --build -d

init:
	hasura deploy --project hasura

up:
	docker-compose up -d

console:
	hasura console --project hasura

clean:
	docker-compose down --rmi all --volumes