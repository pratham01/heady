const express = require('express'),
    bodyParser = require("body-parser"),
    operation = require('./operation'),
    db = require('./db'),
    logger = require('./logger').logger;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((response) => {
    if (response) {
        logger.log('error', 'Unable to connect to DB');
    } else {
        logger.info("DB connected successfully.");
    }
});

app.listen(process.env.PORT || 5000, function () {
    logger.info("Server started on PORT 5000..!!!");
});


app.post('/product', operation.addProduct);
app.post('/category', operation.addCategory);
app.get('/product', operation.categoryWiseProduct);
app.get('/product/:product', operation.getProduct);
app.post('/category/subCategory', operation.addSubCategory);
app.get('/category',operation.getCategory);
