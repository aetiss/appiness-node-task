Steps to run the code base:

### yarn install

1. To install all the dependencies

### yarn start

2. To start the server

Steps to step up database:

1. Create pqsl database in docker with following command.

sudo docker run -d -e POSTGRES_PASSWORD=test -e POSTGRES_USER=test -e POSTGRES_DB=test -p 5432:5432 postgres

2. Run migrations
   ./node_modules/knex/bin/cli.js migrate:latest

3. Run seed files
   ./node_modules/knex/bin/cli.js seed:run
