build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down

restart:
	make stop && make start

logs:
	docker-compose logs -f

seed:
	docker exec -it $(shell docker-compose ps -q backend) psql -U user -d dbname -c "INSERT INTO strategies(name, conditions) VALUES ('Demo', '{}');"

backup-db:
	docker exec backend pg_dump -U user -d dbname > backup_$(shell date +%F).sql
