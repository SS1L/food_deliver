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

### Initialize database and run server
```bash
npm sequelize db:migrate && npx sequelize-cli db:seed
```