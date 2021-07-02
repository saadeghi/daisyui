SHELL = /bin/sh

.PHONY: sh
sh:
	docker-compose run app sh

.PHONY: setup
setup:
	docker-compose run app npm install
	docker-compose run app npm run install:docs

.PHONY: up
up:
	docker-compose up

.PHONY: up!
up!:
	docker-compose up --force-recreate --build

.PHONY: down
down:
	docker-compose down --remove-orphans
