# Food deliver API

This is the simple food deliver API

## API documentation [here](https://documenter.getpostman.com/view/10642515/Tzm6kvup)

## RUN LOCALY

### Clone and install dependencies
``` bash
git clone https://github.com/SS1L/food_deliver.git
cd food_deliver
npm install -g sequelize-cli
```

### Run server and initialize database 
Run server 
```bash 
npm run start
```
Initialize database
```bash
npm run db:migrate && npm run db:seed
```
If you need to delete database, you should you next command 
```bash
npm run db:migrate:undo
```

## Environment variables
variable | default
------------ | -------------
DB_USER | postgres
DB_HOST | localhost
DB_NAME | deliver
DB_PASSWORD | 12345678
DB_PORT | 5432
PORT | 5000
SALT | 12